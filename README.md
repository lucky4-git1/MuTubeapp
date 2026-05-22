# MuTube Landing Page

This repository contains the static landing page for the MuTube app. It is a marketing/site front-end that highlights MuTube features, showcases the user interface, and links to the app download.

## What is included

- `index.html` - the landing page HTML
- `script.js` - page interactions, scroll animations, smooth anchors, and the download button behavior
- `dist/styles.css` - the stylesheet used by the landing page
- `MuTube Setup 1.0.0.exe` - the downloadable Windows installer asset linked from the page
- `vercel.json` - Vercel config for static deployment

## Purpose

This project is not the full desktop player codebase. It is a static website meant to present MuTube and direct visitors to download the app.

## Preview locally

Open `index.html` directly in your browser or serve the folder with a static web server:

```bash
npx serve .
```

## GitHub setup

If this repo is not yet pushed, use:

```bash
git add .
git commit -m "Update README for MuTube landing page"
git push -u origin main
```

If your remote branch is `master`, replace `main` with `master`.

## Deploy to Vercel

This is a static site and can be deployed directly to Vercel.

### Deploy from Vercel dashboard

1. Go to https://vercel.com/new
2. Import the `MuTubeapp` repository
3. Set the root directory to `/`
4. Deploy

### Deploy with Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Notes

- The page is static and does not require a build step.
- If the browser console reports a missing GSAP or ScrollTrigger file, verify the CDN script URLs in `index.html`.
- The download buttons point to the included installer asset.
