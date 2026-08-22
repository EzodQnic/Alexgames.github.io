# alexgames.net

Marketing site for **AlexGames** — a hub page plus one page per game.
Doubles as the App Store **Support URL** and hosts the **Privacy Policy**.

## Contents
```
index.html            AlexGames hub — one card per game
starbob.html          Starbob game page
starfighter.html      Starfighter-SGL-MK3 game page
privacy-policy.html   Privacy policy, covers all games (App Store requires a public URL)
styles.css            Site styles (dark arcade theme), shared by every page
stars.js              Twinkling starfield background (reduced-motion aware)
assets/               Label icons + game art
  icon-512.png        AlexGames label mark (A/G buttons) — favicon, hub hero
  icon-192.png        Same mark at 192px — header brand, small favicon
  apple-touch-icon.png Same mark at 180px
  starbob-icon-512.png Starbob's app icon, kept for reference (not currently used)
  title-v.png         Starbob hero art (portrait)
  title-h.jpg         Starbob landscape art (social/OG card)
  screens/            Starbob gameplay frames
  starfighter/        Starfighter-SGL-MK3 art
    title-v.png       Hero art (portrait) + hub card image
    title-h.png       Landscape art (social/OG card)
    screens/          01.png … 04.png gameplay frames
```

## Preview locally
Any static file server works, e.g.:
```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Deploy (self-contained static site)
No build step — upload the folder as-is.

- **Cloudflare Pages** — connect the repo (or drag-drop the folder). Build command: *none*. Output directory: `/`.
- **Netlify** — drag the folder onto the dashboard, or `netlify deploy --dir=.`.
- **GitHub Pages** — push to a repo, enable Pages on the branch root.

Point `alexgames.net` at the host and you're live.

## The label mark
`assets/icon-*.png` is the AlexGames logo — a zoomed, tilted gamepad corner with
gold **A** and red **G** buttons. Source generations live in `art-src/logo/`
(`alexgames-logo-v3-2.png` is the one in use); `art-src/` is working art and is
not needed to serve the site. The mark is deliberately two-coloured so the buttons
stay distinguishable at favicon size, where the letters stop being legible.

## Adding a game
1. Copy an existing game page (`starbob.html`) to `<game>.html` and rewrite the copy.
2. Drop its art in `assets/<game>/`.
3. Add a `.game-card` block to the `.game-grid` in `index.html`.
4. Name the game in `privacy-policy.html` if it stores anything.

## Before you ship
- **Store links:** `starbob.html` has placeholder `href="#"` on both the
  `.appstore` and `.googleplay` badges (marked with `TODO` comments). Swap in the
  real URLs once Starbob is live on each store.
- **Store badge artwork:** both badges are hand-drawn inline SVG matching the site
  style. Apple and Google both require their *official* badge artwork in shipped
  marketing — swap these for the official assets before any paid promotion.
- **Privacy policy:** carries a `TODO(legal)` on the Google Play Games paragraph —
  confirm it once the Android builds exist.
- **URLs for App Store Connect** (per game, so support lands on the right page):
  - Starbob Support URL → `https://alexgames.net/starbob.html`
  - Starfighter Support URL → `https://alexgames.net/starfighter.html`
  - Privacy Policy URL → `https://alexgames.net/privacy-policy.html`

## Platforms
- **Starbob** — iOS (App Store) and Android (Google Play), both announced as coming soon.
- **Starfighter SGL MK-3** — playable now in the browser at
  `https://starfighter-sgl-mk3.alexgames.net`; iOS and Android to follow.

The one external dependency is the *Press Start 2P* webfont from Google Fonts (used
sparingly for headings). It degrades gracefully to a monospace fallback if blocked.
