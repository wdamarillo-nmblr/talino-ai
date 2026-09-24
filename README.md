# Talino.ai — Website

Evolution of Talinoventures.com, rebuilt for **Agentic Finance** + **Stablecoins / Borderless Payments**.

## Stack
Plain static HTML/CSS/JS — no build step, deployable to any CDN (Netlify, Vercel, Cloudflare Pages, S3).

```
index.html            Home — hero, two pillars, dual-rail diagram, capabilities, impact, compliance
agentic-finance.html  Pillar 01 — agent rails, policy engine, MCP surface, FAQ
stablecoins.html      Pillar 02 — corridor mechanics, reserve posture, comparison table
solutions.html        Segment pages: institutions / startups / embedded / diaspora + platform modules
contact.html          Demo form (mailto submit — wire to real endpoint later)
privacy.html          Legal placeholder
assets/css/main.css   Design system (tokens extracted from talinoventures.com brand.css)
assets/js/main.js     Menu, scroll reveal, typewriter, stat counters, form stub
home.html, brand.css  Reference scrape of the current site (delete before deploy)
```

## Brand lineage
- Palette: deep teal `#003C4B`, navy `#20355A`, `#24719F`, off-white `#FAFAFA` — lifted from the Webflow CSS.
- Type: Mulish body (original), Tiempos → **Fraunces** (open-license serif analogue), **+ JetBrains Mono** for the agent/terminal flair.
- AI flair: `#00B6DE` cyan accent, live terminal cards, animated dual-rail SVG, pulse/typewriter micro-animations, `prefers-reduced-motion` respected.

## Preview locally
```
python3 -m http.server 8080
```

## Before launch (open items)
1. Real demo-form endpoint (HubSpot/Formspree/API) — currently `mailto:hello@talino.ai`
2. Legal counsel review — privacy, GENIUS Act wording, MSB claims
3. Actual metrics for the stat blocks (currently illustrative from copy)
4. Logo: wordmark is typographic; swap in final mark + OG image
5. talinoventures.com → talino.ai redirect plan (keep old site as canonical until cutover)
6. `hello@ / partners@ / devs@ / compliance@` mailboxes must exist
