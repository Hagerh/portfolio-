# Hager Hesham — Portfolio

A 3D developer portfolio built with React and Three.js, showcasing projects spanning mobile development, backend engineering, and AI integration.

**Live site:** _add your Vercel URL here once deployed_

## Tech Stack

| Purpose | Library |
|---|---|
| UI framework | [React 19](https://react.dev) |
| Build tool | [Vite](https://vite.dev) |
| 3D rendering | [Three.js](https://threejs.org) via [React Three Fiber](https://r3f.docs.pmnd.rs) |
| 3D helpers | [React Three Drei](https://github.com/pmndrs/drei) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animation | [Framer Motion](https://www.framer.com/motion) |
| Hover-tilt cards | [react-tilt](https://github.com/CalvinJuarez/react-tilt) |
| Experience timeline | [react-vertical-timeline-component](https://github.com/stephane-monnot/react-vertical-timeline) |
| Contact form | [EmailJS](https://www.emailjs.com) |

## Getting Started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). The dev server hot-reloads on every save.

## Environment Variables

The contact form sends email via EmailJS and needs three keys. Copy the example file and fill in your own:

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Get these from your [EmailJS dashboard](https://dashboard.emailjs.com) after creating an Email Service and an Email Template with `{{name}}`, `{{email}}`, and `{{message}}` variables matching the form fields in `src/components/Contact.jsx`.

`.env` is gitignored — never commit real keys. Restart `npm run dev` after editing `.env`, since Vite only reads it at startup.

## Project Structure

```
src/
  components/       # Page sections: Navbar, Hero, About, Projects, Experience, Contact, Footer
  components/canvas/ # React Three Fiber scenes (e.g. the hero's floating 3D blob)
  constants/        # Project, skill, and experience data — edit index.js to update site content
  hoc/               # SectionWrapper: wraps sections with scroll-triggered fade-in animation
  utils/             # Shared Framer Motion variants and Tailwind class strings
  assets/            # Images and 3D models
public/
  projects/          # Project screenshot images referenced from constants/index.js
```

To update site content (projects, skills, experience, bio), edit **`src/constants/index.js`** — most of the page reads from there.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server with hot reload |
| `npm run build` | Build an optimized production bundle into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run oxlint |

## Deployment

The site auto-deploys to [Vercel](https://vercel.com) on every push to `main`:

```bash
git add -A
git commit -m "describe your change"
git push
```

Vercel builds with `npm run build` and serves the `dist/` output. EmailJS keys are configured as environment variables in the Vercel project settings (Production + Preview), separate from the local `.env` file.

### Note on `npm install`

This repo includes an `.npmrc` with `legacy-peer-deps=true`. `react-tilt`'s published peer dependencies predate React 19, so a strict npm install (like Vercel's fresh clone install) would otherwise fail with an `ERESOLVE` error even though the library works fine at runtime.
