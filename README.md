# alexgames.net

Single-page marketing site for **Starbob**, the first title from **AlexGames**.
Doubles as the App Store **Support URL** and hosts the **Privacy Policy**.

## Contents
```
index.html            The marketing page
privacy-policy.html   Privacy policy (App Store requires a public URL)
styles.css            Site styles (dark arcade theme)
stars.js              Twinkling starfield background (reduced-motion aware)
assets/               Real game art + icons
  title-v.png         Hero art (portrait) — the centrepiece
  title-h.jpg         Landscape art (used as the social/OG card)
  icon-512.png        Logo mark / favicon
  icon-192.png        Favicon (smaller)
  apple-touch-icon.png
  screens/            Pixel-crisp gameplay frames for the gallery
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

## Before you ship
- **App Store link:** in `index.html`, replace the placeholder `href="#"` on the
  `.appstore` badge (marked with a `TODO` comment) with the real App Store URL once
  Starbob is live.
- **URLs for App Store Connect:**
  - Support URL → `https://alexgames.net/`
  - Privacy Policy URL → `https://alexgames.net/privacy-policy.html`

The one external dependency is the *Press Start 2P* webfont from Google Fonts (used
sparingly for headings). It degrades gracefully to a monospace fallback if blocked.
