# Northlight Group — Website

Source code for the Northlight Group website. Built with **Next.js** (React) and hosted on **Vercel** — the replacement for the old WordPress site.

> **Please read first — this is source code, not a document.**
> These files are meant to be opened and edited by a **web developer**, not browsed file-by-file. The folder names (`app`, `lib`, `components`, `public`) are **fixed conventions of the Next.js framework** — they can't be renamed without breaking the site, and every web developer recognises them. If a non-technical team member needs to edit text themselves, that's the **CMS option** described under *"Editing content"* below — not these files.

## "Why do some files look like videos I can't open?"
Files ending in **`.ts`** / **`.tsx`** are **TypeScript code files**. Windows mistakenly shows a *video* icon for `.ts` and tries to open them in a media player — they are **not videos**. Open them with a code editor such as **VS Code** (free), never a media player.

## What each part is (plain language)
| Folder / file | In plain terms |
|---|---|
| **`lib/content.ts`** | **The wording & numbers** of the site — firm details, the four strategies, the team, news, the process steps. This is where a developer changes text. |
| **`app/`** | The **pages** themselves: `page.tsx` = home, plus `about`, `strategies`, `process`, `team`, `news`, `contact`. `layout.tsx` = the shared frame **and the search-engine on/off switch**. `globals.css` = colours & fonts. |
| **`components/`** | **Reusable building blocks** used across pages — the top navigation, footer, the strategy tabs, the animated numbers, etc. |
| **`public/`** | **All images** — the bridge photos (`heroes/`), the office photo (`office.jpg`), the founder photos (`team/`). These you *can* open normally. |
| the rest (`package.json`, `next.config.mjs`, `tailwind.config.ts`, …) | **Settings** the framework needs. Leave as-is unless you know what you're doing. |

*Not stored here on purpose (they rebuild automatically): `node_modules`, `.next`.*

## Run it on a computer (for a developer)
Requires [Node.js 20+](https://nodejs.org).
```
npm install
npm run dev
```
Then open http://localhost:3000

## Publish changes
`npx vercel --prod` — rebuilds and updates the live site (needs a Vercel account with access to the project).

## Editing content — two ways
1. **A developer edits `lib/content.ts`** and publishes. Best when changes are occasional.
2. **Add a CMS** (e.g. Sanity/Contentful) — gives the team a simple login to edit news & bios themselves, no code. A small future add-on if self-service editing is wanted.

## Taking the site live (checklist)
1. **Allow search engines:** in `app/layout.tsx`, change `robots: { index: false, follow: false }` to `index: true, follow: true`.
2. **Publish:** `npx vercel --prod`.
3. **Connect the domain:** add `northlight.co.uk` in the Vercel dashboard and set the DNS records it shows at the domain registrar.

## Before a public launch
- **Compliance:** fund return targets are financial promotions — have Compliance review all copy first.
- **Images:** current photos are licence-free (Unsplash) placeholders + firm-owned founder photos; swap `public/office.jpg` for a real 33 Glasshouse Street facade photo when available.
