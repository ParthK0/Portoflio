# UI Color & Aesthetic System

From now on, all UI styling, components, and pages must strictly adhere to this dark minimalist aesthetic with a vibrant violet accent:

## 1. Palette Specifications

- **Background**:
  - Deep dark charcoal / off-black (`#111111` to `#181818`), creating a low-key, cinematic canvas.
  - Surface elevations: `#161616` (cards/panels), `#181818` (nested modules), `#1F1F1F` (hover states).
  - Borders: `#262626` (subtle border), `#383838` (elevated border).

- **Primary Accent**:
  - Medium violet / lavender purple (`#9D6BEE` to `#A87BF5`).
  - Used for:
    - Prominent abstract geometric shapes
    - Site branding dot (pulsing indicator in navigation and badges)
    - Highlighted subheading text (`strategy · concept · design`)
    - Button accents, glowing rim lights, active timeline dots, and links on hover.

- **Secondary / Contrast**:
  - Crisp pure white (`#FFFFFF`): Primary headline typography, emphasis highlights, active state titles, primary cutout elements.
  - Muted off-white / light gray (`#E0E0E0` to `#A0A0A0`): Secondary typography, body copy, descriptions, navigation links, and footer details.
  - Subtle labels: `#707070`.

- **Imagery**:
  - High-contrast, moody monochrome (black-and-white) photography (`grayscale contrast-125 brightness-95`).
  - Seamlessly blended into the dark backdrop with gradient masks (`linear-gradient(to bottom, black 80%, transparent 100%)`) and organic atmospheric violet rim lighting.

## 2. Design Tokens in `src/index.css`
- `--bg-primary: #111111;`
- `--bg-surface: #161616;`
- `--bg-card: #181818;`
- `--bg-card-hover: #1f1f1f;`
- `--border-subtle: #262626;`
- `--border-hover: #383838;`
- `--accent-primary: #9D6BEE;`
- `--accent-light: #A87BF5;`
- `--accent-glow: rgba(157, 107, 238, 0.28);`
- `--text-pure: #FFFFFF;`
- `--text-primary: #E0E0E0;`
- `--text-muted: #A0A0A0;`
- `--text-subtle: #707070;`
