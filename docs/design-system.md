# Dira OS design system

## Brand palette

The permanent site theme uses the supplied Dira OS mark as its reference: a deep ink canvas, clear blue for actions, and a cyan accent for highlights. The editorial background slideshow sits behind a dark overlay so text stays readable.

| Role | Token | Value |
| --- | --- | --- |
| Primary | `--primary` | `#59AEF8` |
| Primary hover | `--primary-hover` | `#8CCAFF` |
| Accent | `--accent` | `#50DBC9` |
| Background | `--background` | `#07111A` |
| Foreground | `--foreground` | `#F1F6F8` |
| Muted text | `--muted` | `#A5B4BE` |
| Border | `--border` | `rgba(171, 204, 219, 0.17)` |

The tonal scale used in the interface is primary 50–950: `#EFF5FF`, `#DCE9FF`, `#B9D1FF`, `#8FB3FF`, `#6293FF`, `#4184FF`, `#0F5BFF`, `#0B47C7`, `#09399B`, `#082E7A`, `#061E4F`. Accent uses the corresponding mint range from `#EDFFFA` to `#064B3C`.

## Type and layout

- Headings use Sora and body copy uses DM Sans, loaded through Next.js font optimization.
- Navigation, buttons, forms, body copy and supporting UI use DM Sans. Mono-styled values map to DM Sans as well.
- Headings use balanced wrapping, controlled weights and tight tracking. Descriptions use a readable 14–16px scale.
- Shared responsive type targets are 34–64px for the home hero, 30–46px for page titles, 24–34px for section titles and 17–20px for card titles.
- The shared container is 1,160px, with 48–64px section rhythm and consistent 12–14px card radii.
- Brand color is reserved for actions, links, state, charts and intentional glows.

## Tokens and surfaces

Tokens live in `app/globals.css` and are consumed by shared CSS primitives and Tailwind utilities. The public site uses one permanent dark theme. A fixed seven-image background slideshow persists across route navigation, pauses for reduced-motion preferences, and uses a contrast overlay behind page content.

## Content workflows

- Publish a release by editing `config/releases.ts`. Add a real version, size, date, URL and optional SHA-256. Omit `checksum` until it is published; the UI hides that row.
- Swap the supplied mark or product icons in `public/brand/`. Header and footer use `logo-official.png`; favicon assets live beside it.
- Edit global navigation in `config/navigation.ts` and footer groups in `components/layout/footer.tsx`.
- Customer stories and logos are intentionally not shown until real approved content is available.
