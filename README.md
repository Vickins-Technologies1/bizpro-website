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

### Contact form email

The contact form posts to the Node.js App Router endpoint at `/api/contact`. Configure these server-only environment variables in the deployment provider (and in an ignored local `.env.local` for development):

- `SMTP_USER`: Gmail address used to authenticate and as the sender.
- `GOOGLE_APP_PASSWORD`: Google App Password for that account (2-Step Verification must be enabled).
- `CONTACT_RECEIVER_EMAIL`: inbox that receives contact messages.

Do not use `NEXT_PUBLIC_` prefixes for these values. For production on Vercel, add them under the project's Environment Variables, redeploy, then submit a real contact form to verify delivery. SMTP authentication and inbox delivery cannot be verified from this repository without those secrets and access to the deployed environment. The endpoint includes basic in-process rate limiting; deployments with multiple or frequently recycled instances should add a shared rate-limit store or provider-level rate limiting for consistent enforcement.

For a local SMTP connectivity check, put the three values in ignored `.env.local` and run `pnpm email:verify`. This runs Nodemailer's `verify()` once as an operator diagnostic; the visitor API does not run it per request.
