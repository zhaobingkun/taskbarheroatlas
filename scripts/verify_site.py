"""Static SEO and 1.3.0 regression checks; stdlib only, never writes site files."""
import json
import re
import subprocess
import unittest
from html import unescape
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
BASELINE = '8ee44801d3993ae3d73f2ff18bad51f86ed442e4'
DOMAIN = 'https://taskbarheroatlas.com'
SOURCE = 'https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1847286114031351'
TARGET = 'updates/plaguelands-update/index.html'

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.tags = []
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))
    def attrs(self, tag, key, value):
        return [a for t, a in self.tags if t == tag and a.get(key) == value]

def baseline(path):
    return subprocess.check_output(['git', 'show', f'{BASELINE}:{path}'], cwd=ROOT).decode()

def documents():
    return {str(p.relative_to(ROOT)): p.read_text() for p in ROOT.rglob('*.html') if '.git' not in p.parts}

def structured(text):
    return [json.loads(x) for x in re.findall(r'<script type="application/ld\+json">(.*?)</script>', text, re.S)]

def sitemap(text):
    return {n.find('{*}loc').text: n.find('{*}lastmod').text for n in ET.fromstring(text)}

class SiteChecks(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.docs = documents()

    def test_metadata_and_original_index_policy(self):
        titles, canonicals = [], []
        noindex = []
        for name, text in self.docs.items():
            page = Page(text)
            self.assertEqual(len(page.attrs('link', 'rel', 'canonical')), 1, name)
            canonical = page.attrs('link', 'rel', 'canonical')[0]['href']
            self.assertTrue(canonical.startswith(DOMAIN + '/'), name)
            self.assertEqual(canonical, Page(baseline(name)).attrs('link', 'rel', 'canonical')[0]['href'], name)
            canonicals.append(canonical)
            title = re.findall(r'<title>(.*?)</title>', text, re.S)
            self.assertEqual(len(title), 1, name)
            titles.extend(title)
            self.assertEqual(sum(t == 'h1' for t, _ in page.tags), 1, name)
            self.assertEqual(len(page.attrs('meta', 'name', 'description')), 1, name)
            robots = page.attrs('meta', 'name', 'robots')
            self.assertEqual(robots, Page(baseline(name)).attrs('meta', 'name', 'robots'), name)
            if robots and 'noindex' in robots[0]['content']:
                noindex.append(name)
            structured(text)
        self.assertEqual(len(titles), len(set(titles)))
        self.assertEqual(len(canonicals), len(set(canonicals)))
        self.assertEqual(len(noindex), 14)
        self.assertEqual(len(self.docs), 34)

    def test_internal_targets_and_fragments(self):
        for name, text in self.docs.items():
            current = ROOT / name
            for tag, attrs in Page(text).tags:
                for key in ['href', 'src']:
                    value = attrs.get(key, '')
                    u = urlsplit(value)
                    if not value or (u.netloc and u.netloc != 'taskbarheroatlas.com') or u.scheme not in ['', 'https']:
                        continue
                    dest = ROOT / unquote(u.path).lstrip('/') if u.path.startswith('/') or u.netloc else current.parent / unquote(u.path)
                    if not u.path:
                        dest = current
                    if dest.is_dir():
                        dest /= 'index.html'
                    self.assertTrue(dest.is_file(), f'{name}: {value}')
                    if u.fragment and dest.suffix == '.html':
                        ids = {a.get('id') for _, a in Page(dest.read_text()).tags}
                        self.assertIn(unquote(u.fragment), ids, f'{name}: {value}')

    def test_sitemap_url_set_and_dates(self):
        now = sitemap((ROOT / 'sitemap.xml').read_text())
        old = sitemap(baseline('sitemap.xml'))
        self.assertEqual(set(now), set(old))
        self.assertEqual(len(now), 20)
        for name, text in self.docs.items():
            url = Page(text).attrs('link', 'rel', 'canonical')[0]['href']
            robots = Page(text).attrs('meta', 'name', 'robots')
            if robots and 'noindex' in robots[0]['content']:
                self.assertNotIn(url, now, name)
            elif text != baseline(name):
                self.assertEqual(now[url], '2026-10-22', name)

    def test_faq_matches_visible_answers(self):
        text = self.docs[TARGET]
        visible = [(unescape(re.sub('<[^>]+>', '', q)), unescape(re.sub('<[^>]+>', '', a))) for q, a in re.findall(r'<details><summary>(.*?)</summary><p>(.*?)</p></details>', text, re.S)]
        faq = next(x for x in structured(text)[0]['@graph'] if x['@type'] == 'FAQPage')
        schema = [(x['name'], x['acceptedAnswer']['text']) for x in faq['mainEntity']]
        self.assertEqual(visible, schema)
        self.assertEqual(len(visible), 7)

    def test_current_version_and_history(self):
        for name in [TARGET, 'updates/index.html']:
            text = self.docs[name]
            self.assertIn(SOURCE, text)
            self.assertIn('Ver 1.3.0', text)
            self.assertIn('Ver 1.2.4', text)
            self.assertNotIn('Ver 1.2.8 remains the latest', text)
            self.assertNotIn('Ver 1.2.4</span> is the latest', text)
        text = self.docs['updates/index.html']
        self.assertIn('locked Stash items', text)
        self.assertIn('Historical Ver 1.2.8', text)
        for name in ['stages/index.html', 'runes/index.html', 'rune-tree/index.html', 'drop-rates/index.html', 'calculators/chest-timer/index.html']:
            self.assertNotRegex(self.docs[name], r'Ver 1\.2\.8 (?:later fixed|changes chest|updates chest|removed fixed|says chest)')

    def test_scope_and_deadlines(self):
        for name in ['codes/index.html', 'app.js', 'analytics.js', 'site-config.js', 'styles.css', 'robots.txt']:
            self.assertEqual((ROOT / name).read_bytes(), baseline(name).encode(), name)
        text = self.docs['updates/index.html']
        for marker in ['November 11, 2026 at 23:59 UTC', 'October 25 at 04:59 UTC', 'October 22, 2026 at 05:00 UTC', 'not redeem codes', 'October 27']:
            self.assertIn(marker, text)
        for name in [TARGET, 'stages/index.html']:
            for marker in ['Stage 1-10', 'Stage 3-10', '30 Contamination', "Jack-o's Ticket"]:
                self.assertIn(marker, self.docs[name], name)

    def test_relative_rates_and_route_links(self):
        text = self.docs[TARGET]
        for factor in ['1.75×', '2.5×', '1.5×', '3×', '1.66×']:
            self.assertIn(factor, text)
        self.assertIn('not a 3% drop rate', text)
        block = text.split('<section id="next-steps"')[1].split('</section>')[0]
        for path in ['/stages/', '/builds/', '/rune-tree/', '/drop-rates/']:
            self.assertIn(f'href="{path}"', block)

    def test_images_and_blank_targets(self):
        for name, text in self.docs.items():
            for tag, attrs in Page(text).tags:
                if tag == 'img':
                    self.assertIn('alt', attrs, name)
                if tag == 'a' and attrs.get('target') == '_blank':
                    self.assertIn('noopener', attrs.get('rel', ''), name)

if __name__ == '__main__':
    unittest.main(verbosity=2)
