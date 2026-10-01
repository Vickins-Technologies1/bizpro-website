# Dira OS design system

## Brand palette

The supplied `public/brand/dira-logo.png` was visually and programmatically sampled. The mark is led by royal blue and a mint/green accent.

| Role | Token | Value |
| --- | --- | --- |
| Primary | `--primary` | `#0F5BFF` |
| Primary dark | `--primary-dark` | `#06379D` |
| Accent | `--accent` | `#1DD0A3` |
| Ink | `--foreground` | `#0A142A` |
| Muted ink | `--muted` | `#5B6980` |
| Light background | `--background` | `#F8FAFD` |
| Dark background | `[data-theme=dark] --background` | `#050B18` |

The tonal scale used in the interface is primary 50–950: `#EFF5FF`, `#DCE9FF`, `#B9D1FF`, `#8FB3FF`, `#6293FF`, `#4184FF`, `#0F5BFF`, `#0B47C7`, `#09399B`, `#082E7A`, `#061E4F`. Accent uses the corresponding mint range from `#EDFFFA` to `#064B3C`.

## Type and layout

- UI and headings use the existing system/Geist-compatible stack; body copy uses a compact sans stack.
- Headings use tight tracking and short line-height. Body copy stays at 15–16px with a muted tone.
- The shared container is 1,160px, with 72–105px section rhythm and 10–16px card radii.
- Brand color is reserved for actions, links, state, charts and intentional glows.

## Tokens and themes

Theme tokens live in `app/globals.css` and are consumed by both legacy CSS primitives and Tailwind utilities. `next-themes` provides Light, Dark and System behavior and persists the choice without a flash.

## Content workflows

- Publish a release by editing `config/releases.ts`. Add a real version, size, date, URL and optional SHA-256. Omit `checksum` until it is published; the UI hides that row.
- Swap the supplied mark or product icons in `public/brand/`. Header and footer use `logo-official.png`; favicon assets live beside it.
- Edit global navigation in `config/navigation.ts` and footer groups in `components/layout/footer.tsx`.
- Customer stories and logos are intentionally not shown until real approved content is available.
