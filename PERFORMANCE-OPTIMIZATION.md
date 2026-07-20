# Performance Optimization Plan

Scope: `https://taskbarheroatlas.com/` based on the PageSpeed Insights report dated 2026-07-20.

The target is to remove every first-party bottleneck identified by PSI. A repeatable 100 is not guaranteed because Lighthouse scores vary with its test network, third-party services, and the report's current cache state.

## P0 — First-paint and LCP payload (implemented)

- Convert Atlas artwork from PNG to WebP and update every page reference. The homepage hero fell from about 1.9 MB to 124 KB; the role roster fell from about 1.8 MB to 116 KB. Image dimensions, alt text, and lazy/eager loading rules remain unchanged.
- Preload the above-the-fold hero image at high priority. Keep the role roster lazy-loaded because it is below the fold.
- Remove the stylesheet-level Google Fonts `@import`, which created a CSS-to-font request chain. Add `preconnect` hints in the HTML head and load the font stylesheet asynchronously with a `noscript` fallback. The site keeps the same font family and uses system fallbacks during the short font swap.

Expected result: removes approximately 3.4 MB of homepage image transfer in the reported desktop audit and breaks the 0.8–1.1 s blocking font dependency chain.

## P1 — Accessibility and mobile usability (implemented)

- Increase the homepage directory link targets to at least 28 px high, including spacing between neighbouring links.
- Darken the teal-on-mint database eyebrow label to meet the 4.5:1 text contrast target.
- Make the home link's accessible name start with its visible `TBHATLAS` text, then add its purpose.

Expected result: resolves the 12 touch-target reports, the contrast report, and the visible-label/accessibility-name report.

## P0.2 — Mobile CSS request chain and responsive LCP image (implemented)

- Inline only the homepage's above-the-fold layout styles (header, mobile navigation, and hero) so the first render does not wait on `styles.css`; continue loading the complete stylesheet asynchronously for the rest of the page.
- Add 768 px and 960 px WebP variants for the hero, with `srcset`, `sizes`, and a matching responsive preload. A phone can now request a 24–36 KB source instead of the 124 KB desktop source while retaining a 1672 px source for large displays.

Expected result: removes the reported homepage CSS dependency from the render-critical path and further reduces mobile LCP image transfer. It does not change any site interaction or analytics behaviour.

## P2 — Analytics loading strategy (decision required)

PSI reports 66 KB of unused `gtag.js` during the initial page load. The technical option is to load GA4 only after browser idle time, scrolling, or the first interaction.

Trade-off: this improves first-load performance but may miss a visit where someone leaves before that trigger. Do not change the current GA4 loading behaviour without an explicit decision on whether performance or every-pageview measurement is more important.

## P3 — Third-party Cloudflare Insights beacon (decision / platform review)

PSI identifies a small `static.cloudflareinsights.com` beacon with a short cache lifetime. This cache policy belongs to the provider, not the site's static files. If the script is injected through Cloudflare Web Analytics, it can be disabled in Cloudflare; doing so removes the warning but also removes that analytics product. Confirm the account-level use before changing it.

## Validation after deployment

1. Confirm the Vercel production deployment is ready and hard-refresh the homepage.
2. Run PSI desktop and mobile again after the CDN cache has updated.
3. Verify the hero image uses `/assets/rune-atlas-tree.webp`, the role image uses WebP, and no page requests the old four large PNGs.
4. Check the GA4 Realtime panel if analytics remains enabled.
5. Re-run the Lighthouse accessibility audit; expected first-party result is 100 for the three reported failures.
