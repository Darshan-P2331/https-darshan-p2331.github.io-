# Design System: Portfolio Website

## 1. Core Identity & Vibe
A sleek, modern single-page portfolio focused on high-readability and subtle micro-interactions. The design aesthetic is "tech-forward elegance" – avoiding cluttered templates in favor of precise spacing, deliberate typography, and a seamless toggle between a crisp Light Mode and a deep, immersive Dark Mode.

**Signature Element:** A floating, glassmorphic navigation pill that tracks the active section with a smooth, sliding highlight, acting as the anchor for the single-page experience.

## 2. Typography
Typography carries the personality. We pair a characterful modern sans-serif for headings with a highly legible geometric sans for the body.

- **Display/Headings:** `Outfit` (Google Fonts)
  - Usage: `<h1>` to `<h4>`, bold accents, and the logo mark.
  - Weights: SemiBold (600), Bold (700).
- **Body/UI:** `Inter` (Google Fonts)
  - Usage: Paragraphs, buttons, nav links, tags.
  - Weights: Regular (400), Medium (500).

*Scale:*
- Hero Heading: `text-5xl` or `text-6xl` (mobile: `text-4xl`), tight tracking (`tracking-tight`).
- Section Headings: `text-3xl` or `text-4xl`.
- Body: `text-base` (16px), relaxed leading (`leading-relaxed`).

## 3. Color Palette (Light & Dark)
We use a high-contrast foundation with a vibrant, singular accent color to draw attention without overwhelming.

### Dark Mode (Default)
- **Background:** `#09090B` (Zinc 950) - Deep, near-black.
- **Surface/Cards:** `#18181B` (Zinc 900) with a subtle border `#27272A` (Zinc 800).
- **Primary Text:** `#FAFAFA` (Zinc 50) - High contrast.
- **Secondary Text:** `#A1A1AA` (Zinc 400) - For dates, tags, and subtle copy.
- **Accent/Brand:** `#6366F1` (Indigo 500) - Used for links, active states, and call-to-actions.

### Light Mode
- **Background:** `#FAFAFA` (Zinc 50) - Crisp, slightly warm white.
- **Surface/Cards:** `#FFFFFF` (White) with a subtle border `#E4E4E7` (Zinc 200).
- **Primary Text:** `#09090B` (Zinc 950).
- **Secondary Text:** `#71717A` (Zinc 500).
- **Accent/Brand:** `#4F46E5` (Indigo 600).

## 4. Layout & Spacing
- **Container:** Max-width of `max-w-4xl` (`896px`) to keep line lengths readable and the layout focused.
- **Section Spacing:** Generous padding between sections (e.g., `py-24` or `py-32`) to let content breathe.
- **Radius:** Slight rounding on cards and buttons (`rounded-xl` or `rounded-2xl`) for a friendly but precise feel.

## 5. UI Components & shadcn/ui Usage
- **Buttons:** Solid for primary CTAs (Indigo background), subtle or outline variants for secondary links. `rounded-full` for a modern, pill-like feel.
- **Cards:** Used for Projects and Experience. Minimal borders, slight shadow on hover (`hover:shadow-lg transition-all duration-300`).
- **Badges:** Used for Skills. Soft background colors (e.g., Zinc 100/Zinc 800) with solid text.
- **Navigation:** Fixed at the top (or bottom on mobile) with a blur effect (`backdrop-blur-md bg-background/70`).

## 6. Motion & Micro-interactions
- **Hover States:** Smooth transform on cards (translate Y up by 2px) and slight color shifts on buttons.
- **Transitions:** Global `transition-colors duration-300` for smooth light/dark mode toggling.
- **Scroll:** Smooth behavior via `html { scroll-behavior: smooth; }`.

## 7. Tone of Voice
- **Direct & Confident:** Use active voice ("View Project" instead of "Click here to see project").
- **Concise:** Keep descriptions brief and scannable.
- **Empty States:** "More projects coming soon" instead of just a blank space.
