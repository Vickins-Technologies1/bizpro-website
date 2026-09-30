# Dira OS marketing site

## Redesign notes

- Added a compact light/dark/system theme system using semantic CSS tokens in `app/globals.css`. `next-themes` applies the selected theme before paint and persists the choice.
- Rebuilt the homepage around a responsive SaaS layout with an offline demo, product dashboard, connected workflow, BI view, industries, FAQ and trust content.
- Added `DownloadModal` for all primary download CTAs and a release-driven `/download` page.

## Publishing a release

Update `config/releases.ts` with the version, file URL, size, release date and SHA-256 checksum. Replace the placeholder installer files and checksums before shipping.

## Brand content

Swap customer marks, testimonials and platform links in `components/home-client.tsx` and `config/releases.ts`. The current customer names and installer URLs are intentionally sample content.

## Validation

Run `pnpm typecheck`, `pnpm lint`, and `pnpm build` before deployment.
