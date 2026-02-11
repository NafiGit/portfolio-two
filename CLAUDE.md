# CLAUDE.md

## Project Overview

Personal portfolio website for Nahfid Nissar (Software Developer & Cybersecurity Specialist). Built with Next.js 13 (App Router), TypeScript, Tailwind CSS, and shadcn/ui. Statically exported — no backend, API routes, or database.

## Commands

- `npm run dev` — Start development server
- `npm run build` — Production build (static export to `out/`)
- `npm run lint` — Run ESLint (`next lint`)
- `npm start` — Start production server (not applicable for static export)

No test framework is configured.

## Architecture

### Tech Stack

- **Next.js 13.5.1** with App Router, static export (`output: 'export'`)
- **React 18.2.0** / **TypeScript 5.2.2**
- **Tailwind CSS 3.3.3** with `tailwindcss-animate` plugin
- **shadcn/ui** — Radix UI primitives styled with Tailwind
- **next-themes** — Dark/light mode (class-based)
- **lucide-react** — Icons

### Directory Structure

```
app/              → Next.js App Router pages and layouts
  layout.tsx      → Root layout (metadata, ThemeProvider)
  page.tsx        → Single-page home (all sections rendered here)
  globals.css     → Tailwind directives and CSS variable theme tokens
components/       → Page-level section components
  ui/             → shadcn/ui primitives (Button, Card, Badge, etc.)
  Header.tsx      → Nav bar with theme toggle
  Introduction.tsx, Experience.tsx, TechnicalSkills.tsx, Projects.tsx, Footer.tsx
  theme-provider.tsx → next-themes wrapper
hooks/            → Custom React hooks (use-toast.ts)
lib/              → Utilities (utils.ts — cn() for Tailwind class merging)
.bolt/            → Bolt AI editor config (template: nextjs-shadcn)
```

### Key Patterns

- **Server Components by default.** Only add `"use client"` when the component needs browser APIs, hooks, or event handlers (e.g., `Header.tsx`, `Projects.tsx`).
- **Section-based layout.** The home page composes section components (`Introduction`, `Experience`, `TechnicalSkills`, `Projects`, `Footer`).
- **Static data.** All content (experience entries, project list, skills) is defined inline as arrays/objects within components — no external data sources.
- **shadcn/ui composition.** UI is built from `Card`, `Badge`, `Button`, and other shadcn primitives. These live in `components/ui/` and should not be edited directly.
- **Styling with `cn()`.** Use `cn()` from `lib/utils.ts` (`clsx` + `tailwind-merge`) to compose class names.
- **CSS variable theming.** Colors are defined as HSL CSS variables in `globals.css` and referenced via Tailwind config. Dark mode switches variable sets.

### Path Aliases

`@/*` maps to the project root (configured in `tsconfig.json`). Use `@/components/ui/button` instead of relative paths.

## Conventions

- **Component files:** PascalCase (`Header.tsx`, `TechnicalSkills.tsx`)
- **Utility/hook files:** kebab-case (`use-toast.ts`, `utils.ts`)
- **No testing:** No test files or test runner configured
- **ESLint:** Extends `next/core-web-vitals`. ESLint errors are ignored during build (`eslintrc` in `next.config.js`)
- **Images:** Optimization disabled (`unoptimized: true` in `next.config.js`) since this is a static export
- **Icons:** Use `lucide-react` — do not add other icon libraries
- **UI components:** Use existing shadcn/ui components from `components/ui/` — do not install alternative UI libraries

## Build & Deploy

Static export produces files in `out/`. Deployable to any static hosting (Vercel, Netlify, GitHub Pages, S3). No server runtime required.
