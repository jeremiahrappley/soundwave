# Welcome to Soundwave

Soundwave is a microsite that displays playlists of my favorite music from each month since 2018. The playlists are embedded from Apple Music, allowing viewers to preview and stream songs directly within their browser.

Built with Vite, React, TypeScript, React Router, and Tailwind CSS. Deployed to GitHub Pages via GitHub Actions on every push to `master`.

## Development

```
npm install
npm run dev       # local dev server
npm test          # vitest
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

## Adding a new monthly playlist

All playlists live in [`src/data/playlists.ts`](src/data/playlists.ts). Once a new
monthly playlist is public on Apple Music, add it with:

```
npm run add-playlist -- <apple-music-playlist-url> [--year 2026] [--month July] [--title "July 2026"]
```

The URL can be a regular `music.apple.com` share link or an `embed.music.apple.com`
link — it's normalized automatically. Title/month/year are inferred from the URL
slug when possible; omit any flag to be prompted for it instead. The command
updates `src/data/playlists.ts` and `git add`s it, but doesn't commit — review the
diff and commit/push yourself:

```
git commit -m "Add playlist for July 2026"
git push
```

Pushing to `master` triggers the GitHub Actions deploy.

Use `--dry-run` to preview the change without writing the file.

### Why not fully automatic?

Detecting new playlists directly from your Apple Music library would require the
Apple Music API, which needs a Music User Token that expires every 6 months with
no programmatic refresh — so even "full" automation would need recurring manual
Apple sign-in. The CLI above gets nearly the same convenience (one command, no
hand-editing) without an Apple Developer Program account or token upkeep.

## Deployment

GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))
builds and deploys `dist/` to GitHub Pages on every push to `master`. In the repo
settings, set **Settings → Pages → Source** to "GitHub Actions" once this workflow
is pushed.

Served at [soundwave.jrappley.com](https://soundwave.jrappley.com) via a custom
domain — [`public/CNAME`](public/CNAME) is copied into every build so GitHub Pages
keeps the domain across deploys. DNS is a `CNAME` record for `soundwave` pointing
at `jeremiahrappley.github.io`, set in `jrappley.com`'s DNS provider.
