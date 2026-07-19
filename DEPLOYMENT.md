# Production launch checklist

## Canonical domain

The site is configured for `https://taskbarheroatlas.com/`.

After registering the domain, connect both `taskbarheroatlas.com` and `www.taskbarheroatlas.com` to the chosen host, then set the apex domain as the primary domain. Create a permanent 301 redirect from every `www.taskbarheroatlas.com/*` URL to the matching `https://taskbarheroatlas.com/*` URL. Enable the host's automatic HTTPS redirect before adding the HSTS header in `_headers`.

This redirect is a hosting/DNS rule rather than an HTML feature. Do not rely on JavaScript or meta refreshes for canonicalization.

## Analytics

1. Create a Google Analytics 4 web data stream for `https://taskbarheroatlas.com`.
2. Put its Measurement ID (`G-...`) in `site-config.js`.
3. The loader only activates on the canonical HTTPS production domain; local previews stay analytics-free.
4. Add the same domain to Google Search Console, then submit `https://taskbarheroatlas.com/sitemap.xml`.

## Final checks

- Confirm `/`, `/runes/`, `/calculators/chest-timer/`, `/guides/exp-farm/` and `/tier-list/` return 200.
- Confirm a non-existent URL returns the custom `404.html` response.
- Confirm `http://`, `https://www.` and `http://www.` all 301 to the canonical HTTPS apex URL.
- Confirm every canonical points to `https://taskbarheroatlas.com/...`.
- Confirm `robots.txt` and `sitemap.xml` are publicly reachable.
- Confirm the privacy page and independent-fan disclaimer are visible.
