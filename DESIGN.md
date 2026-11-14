# SignResize.in Design System (`DESIGN.md`)

Inspired by **Arc** (`arc.net`) and paired with a neutral precision crop stage for document/signature accuracy:
- **Arc Palette & Hero:** Warm cream `#FFFEF0` light canvas, electric blue `#3B3BFF` primary & textured `.creative-hero` field, deep indigo `#1A1A8C` contrast anchor, ink `#000000` / muted-ink `#6B6B8C`, and `#0D0E1A` dark slate mode.
- **Neutral Canvas Stage Isolation (`#crop-workspace`):** Pure neutral `#FFFFFF` light / `#111214` dark crop workspace so cream `#FFFEF0` never tints uploaded photos, skin tones, or paper whiteness checks.
- **Typography & Controls:** Tight heading tracking (`-0.025em`), `0.03em`-tracked `.font-mono` badges/specs, `tabular-nums lining-nums` on dimensions/tables/KB telemetry, hairline card elevation, and segmented `[role='tablist']` controls.

## Active Tokens (`src/styles/global.css`)

| Token | Light Mode (Arc Cream) | Dark Mode (Arc Slate) |
|---|---|---|
| `--background` | `#FFFEF0` | `#0D0E1A` |
| `--card` | `#FFFFFF` | `#131426` |
| `--foreground` | `#000000` | `#FFFFFF` |
| `--muted` | `#F4F2DE` | `#1A1C34` |
| `--muted-foreground` | `#6B6B8C` | `#9B9BC0` |
| `--border` | `#D8D7EE` | `#2A2C4E` |
| `--primary` | `#3B3BFF` | `#3B3BFF` |
| `--primary-foreground` | `#FFFFFF` | `#FFFFFF` |
| `--accent` | `rgba(59, 59, 255, 0.1)` | `rgba(59, 59, 255, 0.2)` |
| `--accent-foreground` | `#1A1A8C` | `#FFFEF0` |
| `--ring` | `#3B3BFF` | `#5B5BFF` |
| `--success` | `#16A34A` | `#27A644` |
