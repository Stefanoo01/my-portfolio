# Stefano Racca — Portfolio

A fast, accessible Next.js portfolio that highlights AI and machine learning projects, experience, and contact details. The codebase has been stripped back to the essentials: only the components and dependencies required to render the published sections remain, making it easy to understand, extend, and deploy.

## Features

- **Modern UI** powered by Next.js 14, Tailwind CSS 4, and a curated set of Radix primitives.
- **Responsive layout** with smooth reveal animations, project cards, and timeline sections for experience and education.
- **Dark/light mode** switch backed by `next-themes` and a lightweight dropdown menu implementation.
- **Server action contact form** that uses Nodemailer to send structured emails (configurable via environment variables).
- **Single content source** defined in [`lib/portfolio-data.ts`](lib/portfolio-data.ts) so updates happen in one place.
- **Lean asset bundle** — unused media, hooks, and UI widgets have been removed to keep the repo small and focused.

## Project structure

```text
app/                # Next.js app router entrypoints
  layout.tsx        # App shell, fonts, and providers
  page.tsx          # Portfolio page composition
  globals.css       # Tailwind base styles and design tokens
components/
  content-provider  # Supplies portfolio data to the tree
  hero, projects, experience, education, skills, contact-form, footer, ...
  ui/               # Minimal Radix-based primitives actually used on the page
lib/
  portfolio-data.ts # Copy and metadata for the portfolio sections
public/             # Optimised assets (hero image, project screenshots, CV)
tsconfig.json       # Path aliases and compiler options
next.config.mjs     # Next.js configuration
postcss.config.mjs  # Tailwind/PostCSS integration
```

## Getting started

1. **Install dependencies** (Node.js 18+ is recommended):

   ```bash
   npm install
   ```

   This will generate a fresh `package-lock.json` tailored to the trimmed dependency list.

2. **Start the development server:**

   ```bash
   npm run dev
   ```

   The site will be available at [http://localhost:3000](http://localhost:3000).

3. **Lint and type-check (optional):**

   ```bash
   npm run lint
   ```

4. **Build for production:**

   ```bash
   npm run build
   npm run start
   ```

## Environment variables

The contact form uses Nodemailer to send messages. Configure the following variables (e.g. in a `.env.local` file) before running `npm run dev` or deploying:

| Variable             | Purpose                                                                    |
| -------------------- | -------------------------------------------------------------------------- |
| `SMTP_HOST`          | SMTP server hostname                                                       |
| `SMTP_PORT`          | SMTP port (defaults to `587` if unspecified)                               |
| `SMTP_SECURE`        | Set to `true` to use TLS                                                   |
| `SMTP_USER`          | SMTP username (used for authentication and fallback recipient)             |
| `SMTP_PASS`          | SMTP password                                                              |
| `CONTACT_TO_EMAIL`   | Optional explicit recipient address; falls back to `SMTP_USER` when empty |
| `CONTACT_FROM_EMAIL` | Optional `from` header (defaults to `Portfolio <no-reply@your-host>` )     |

## Customising content

- Edit personal details, project metadata, experience, education, and skill categories in [`lib/portfolio-data.ts`](lib/portfolio-data.ts).
- Replace media in the [`public/`](public) directory with your own assets. Update image paths in `portfolio-data.ts` if filenames change.
- Global styles (colours, spacing tokens, fonts) live in [`app/globals.css`](app/globals.css). Tailwind utilities handle the majority of layout styling, so changes are minimal.
- UI primitives (buttons, dropdown, cards, etc.) are located in [`components/ui`](components/ui). They are intentionally lightweight wrappers around Radix primitives, ready for further customisation if needed.

## Additional notes

- The dependency list has been reduced to the minimum required for the current UI. If you add new components, install only the packages you actually need.
- For production deployments (Vercel, Netlify, etc.), ensure the environment variables above are configured in the hosting dashboard.
- Contributions or further customisations should follow the existing folder structure to keep the project maintainable.

Enjoy building on top of this streamlined portfolio!
