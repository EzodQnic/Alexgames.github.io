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
assets/               Label icons + Starbob art
  title-v.png         Starbob hero art (portrait)
  title-h.jpg         Starbob landscape art (social/OG card)
  icon-512.png        Logo mark / favicon
  icon-192.png        Favicon (smaller)
  apple-touch-icon.png
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

## Adding a game
1. Copy an existing game page (`starbob.html`) to `<game>.html` and rewrite the copy.
2. Drop its art in `assets/<game>/`.
3. Add a `.game-card` block to the `.game-grid` in `index.html`.
4. Name the game in `privacy-policy.html` if it stores anything.

## Before you ship
- **App Store links:** each game page has a placeholder `href="#"` on the
  `.appstore` badge (marked with a `TODO` comment). Swap in the real App Store URL
  once that game is live.
- **Starfighter TODOs:** `starfighter.html` carries `TODO(copy)` and `TODO(art)`
  markers — the copy is a first draft and the art paths are not yet filled.
- **URLs for App Store Connect** (per game, so support lands on the right page):
  - Starbob Support URL → `https://alexgames.net/starbob.html`
  - Starfighter Support URL → `https://alexgames.net/starfighter.html`
  - Privacy Policy URL → `https://alexgames.net/privacy-policy.html`

The one external dependency is the *Press Start 2P* webfont from Google Fonts (used
sparingly for headings). It degrades gracefully to a monospace fallback if blocked.
