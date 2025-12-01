# PuraTrip — Support Website

This repository contains a ready-to-deploy support/marketing website for **PuraTrip** (React + TypeScript + Vite + Tailwind).

## What you get
- React + TypeScript app scaffold (Vite)
- Tailwind CSS setup
- Contact form with **Netlify Forms** support (zero backend)
- Example serverless functions for **Vercel** and **Netlify** if you prefer a custom endpoint
- GA4 analytics helper
- Production-ready `.gitignore`

## Quick start (local)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run dev server:
   ```bash
   npm run dev
   ```
3. Build:
   ```bash
   npm run build
   npm run preview
   ```

## Netlify (zero-backend) setup
1. Push repo to Git provider and connect site in Netlify.
2. Build command: `npm run build`, Publish directory: `dist`
3. Enable **Netlify Forms**:
   - The public `index.html` contains a hidden static form so Netlify detects the form fields at build-time.
   - In the site deploy settings you can enable form notification/emails.
4. Alternatively, use the `netlify/functions/contact.js` serverless function and update `VITE_CONTACT_ENDPOINT` to the function's URL.

## Vercel / Netlify Functions (example)
- `api/vercel/contact.ts` — example Vercel serverless function (TypeScript).
- `netlify/functions/contact.js` — example Netlify Function (Node.js).
These functions are examples only — hook them to an email provider (SendGrid, Mailgun) or a database as needed.

## Environment variables
- `VITE_GA_MEASUREMENT_ID` — (optional) GA4 Measurement ID (G-XXXXXXXX).
- `VITE_USE_NETLIFY` — set to `true` to enable Netlify Forms client behavior.
- `VITE_CONTACT_ENDPOINT` — optional custom endpoint for contact submissions.

## Deploying
- **Vercel**: Connect Git repo, set env variables in project settings.
- **Netlify**: Connect Git repo, set build settings and env vars.

## Security & Production notes
- Protect endpoints with rate-limiting and spam protection (reCAPTCHA or hCaptcha).
- If storing messages, use secure DB and access rules.
- Do not commit secrets — use environment variables in Vercel/Netlify.

## License
MIT