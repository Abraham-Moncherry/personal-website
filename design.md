# Design System Strategy: The Digital Architect

## 1. Overview & Creative North Star

**Creative North Star: The Curated Mind**
This design system moves beyond the standard "developer portfolio" template to create a space that feels like a high-end digital gallery. For an AI Software Engineer, the UI must reflect the precision of code and the fluidity of intelligence. We achieve this through "The Curated Mind"—a philosophy that prioritizes intentional whitespace, editorial-grade typography, and a rejection of traditional structural boundaries.

To break the "Bootstrap" or "Material" feel, this system leverages **intentional asymmetry**. Hero sections should utilize large, off-center headings, and project grids should vary in height and alignment to create a rhythmic, non-linear reading experience. We are not just building a site; we are curating an intellectual journey.

---

## 2. Colors

The palette is rooted in sophisticated neutrals to provide a calm, high-end backdrop, punctuated by a singular, vibrant energy source.

### The Palette
- **Background & Base:** `#faf9f8` (Surface). A warm, "gallery white" that feels more premium than pure hex white.
- **The Core Accent:** `#785a00` (Primary) and `#914d00` (Tertiary). Use these for high-intent moments, progress indicators, or active states.
- **Deep Neutrals:** `#2f3333` (On-Surface). Used for high-contrast typography to ensure absolute legibility.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to separate sections.
Boundaries must be created through:
- **Tonal Shifts:** Transitioning from `surface` to `surface-container-low`.
- **Negative Space:** Using a minimum of `8rem` (128px) of vertical whitespace between major content blocks.

### Surface Hierarchy & Nesting
Treat the interface as physical layers of fine paper.
- **Base Layer:** `surface` (#faf9f8)
- **Content Cards:** `surface-container-lowest` (#ffffff) to provide a subtle "pop" against the background.
- **Sub-elements:** `surface-container` (#edeeed) for nested sections or background utility areas.

### The "Glass & Gradient" Rule
To evoke the "AI" essence, use Glassmorphism for floating elements (like the navigation bar or "Talk to AI" orbs). Use `surface` with a 70% opacity and a `backdrop-blur` of `20px`. Incorporate a subtle gradient from `primary` (#785a00) to `tertiary-fixed` (#fe932c) for central interactive orbs to provide a "living" pulse to the machine.

---

## 3. Typography

The typography strategy is built on a "High-Contrast Scale," pitting the technical precision of Monospace/Grotesk against the warmth of Humanist Sans.

- **Display & Headlines (Manrope):** Bold, heavy-weighted, and commanding. These should be set with tight letter-spacing (-0.04em) to create an authoritative, editorial impact.
- **Titles & Body (Inter):** The workhorse. Inter provides a clean, neutral tone that allows the technical content to be the star.
- **Labels (Space Grotesk):** Used for "AI Metadata," tags, and technical specs. This font adds a "hacker-chic" utility that feels innovative and precise.

**Editorial Hierarchy:**
- `display-lg` (3.5rem) is reserved for the Name/Hero only.
- `label-md` (Space Grotesk) should always be Uppercase with +0.1em letter spacing for a "Technical Tag" aesthetic.

---

## 4. Elevation & Depth

We eschew traditional shadows in favor of **Tonal Layering**.

- **The Layering Principle:** Depth is achieved by "stacking." A project card (`surface-container-lowest`) sitting on a section background (`surface-container-low`) creates a natural, soft lift without a single drop shadow.
- **Ambient Shadows:** Only use shadows for high-priority floating elements (e.g., a "Chat with AI" trigger). Use a highly diffused shadow: `0 20px 40px rgba(47, 51, 51, 0.05)`.
- **The Ghost Border:** If a boundary is strictly required for accessibility, use the `outline-variant` (#aeb3b2) at **15% opacity**. It should be felt, not seen.
- **Glassmorphism:** For the "innovative" vibe, floating containers should use semi-transparent background fills to allow the "energy" of the site's accent colors to bleed through from beneath.

---

## 5. Components

### Buttons
- **Primary:** No borders. Background: `primary` (#785a00). Text: `on-primary` (#fff6ec). Shape: `md` (0.375rem).
- **Secondary (The Minimalist):** No background. Text: `primary`. On hover, a subtle `surface-container-high` background appears.
- **Tertiary:** `label-md` style text with a 2px `primary` underline.

### Cards (The "Editorial" Card)
- **Style:** No borders, no shadows.
- **Separation:** Use a vertical background shift or simply generous whitespace (`padding: 2rem`).
- **Interaction:** On hover, the image within the card should subtly scale (1.02x), and the background color shifts from `surface-container-lowest` to `surface-container-high`.

### AI Interaction Orb
- **Style:** A radial gradient from `primary_fixed` to `tertiary_fixed`.
- **Effect:** Apply a `backdrop-filter: blur(10px)` and a slow "breathing" animation. This is the visual anchor of the "Innovative" vibe.

### Input Fields
- **Style:** Underline only. Use `outline-variant` at 20% for the resting state, moving to 100% `primary` on focus. No box containers.

---

## 6. Do's and Don'ts

### Do
- **Do** use asymmetrical layouts. Place text on the left and leave the right 40% of the screen empty to emphasize "focus."
- **Do** use the `primary` accent color sparingly—only for points of interaction and the "AI" center.
- **Do** treat "Scroll to Explore" as a high-end editorial label using `label-sm` in `primary` color.

### Don't
- **Don't** use standard dividers or horizontal rules. Let whitespace do the work.
- **Don't** use sharp, high-contrast shadows. They break the "Sophisticated Neutral" aesthetic.
- **Don't** clutter the screen. If a piece of information isn't vital to the "Story" of the engineer, remove it.
- **Don't** use a standard grid for the "Technologies" section. Cluster icons organically or allow them to bleed off the edge of the container to suggest a vast, uncontained skill set.
