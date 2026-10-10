# Dira OS marketing site

## Download center

- `/download` is the release-driven Dira OS Download Center. It detects the visitor's likely platform, provides manual platform tabs, and shows only verified destinations.
- The current published native release is Android: Google Play plus the checked-in HTTPS APK. Windows, macOS, Linux/Kali, iOS/iPadOS, and web app entries remain visible but intentionally have no fake actions until their artifacts or production URLs are verified.
- `DownloadModal` is shared by primary CTAs and links back to the same download center.

## Publishing a release

Update `config/releases.ts` with the version, file URL, size, release date and SHA-256 checksum. Set `NEXT_PUBLIC_WEB_APP_URL` only when a real production application URL is available. Add a platform action only after its artifact or destination has been checked over HTTPS.

## Brand content

Brand assets live in `public/brand/`. Keep download metadata in `config/releases.ts` rather than scattering URLs across components.

## Validation

Run `pnpm typecheck`, `pnpm lint`, and `pnpm build` before deployment.
## Dira OS marketing site

Premium, responsive Next.js App Router site for Dira OS. The design system is documented in [docs/design-system.md](docs/design-system.md).

### Run locally

```bash
pnpm install
pnpm dev
```

Before publishing, run `pnpm run typecheck` and `pnpm run build`.

### Common edits

- Releases: `config/releases.ts`
- Pricing: `config/pricing.ts`
- Navigation: `config/navigation.ts`
- Brand assets: `public/brand/`
- Site and contact configuration: `config/site.ts` / `.env.example`
