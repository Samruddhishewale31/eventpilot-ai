# Design System Specification: High-End Event Intelligence

## 1. Overview & Creative North Star: "The Ethereal Navigator"
This design system moves away from the rigid, boxy constraints of traditional SaaS platforms to embrace a philosophy we call **The Ethereal Navigator**. The goal is to make complex event data feel weightless, intuitive, and premium. 

To achieve a signature, custom-tailored look, we prioritize **intentional asymmetry** and **tonal depth** over standard grids and borders. By layering "frosted" surfaces and utilizing high-contrast editorial typography, we create an environment that feels more like a high-end digital concierge than a data-heavy dashboard. We break the "template" look by allowing hero elements to overlap containers and using white space as a structural element rather than a void.

---

## 2. Colors & Surface Philosophy
The palette is rooted in deep, intellectual violets and indigos, balanced by an expansive, airy background.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. Boundaries must be defined through:
1.  **Background Shifts:** e.g., a `surface-container-low` component sitting on a `background` page.
2.  **Tonal Transitions:** Using subtle shifts in lightness to imply edge without a hard line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—stacked sheets of frosted glass.
*   **Base:** `surface` (#f7f9fb)
*   **Secondary Sections:** `surface-container-low` (#f2f4f6)
*   **Interactive Cards:** `surface-container-lowest` (#ffffff)
*   **Elevated Overlays:** `surface-bright` (#f7f9fb) with Glassmorphism.

### The "Glass & Gradient" Rule
To inject "soul" into the interface, avoid flat primary blocks. 
*   **Signature Gradients:** For primary CTAs and Hero sections, use a linear gradient (135°) from `primary` (#3525cd) to `primary-container` (#4f46e5).
*   **Glassmorphism:** Use semi-transparent variants of `surface-container-lowest` with a `backdrop-blur` of 12px–20px for floating navigation bars and modal overlays.

---

## 3. Typography: Editorial Authority
We pair **Manrope** (Display/Headline) with **Inter** (Body) to strike a balance between futuristic elegance and high-utility readability.

*   **Display (Manrope):** Used for "Big Moments"—key metrics or hero welcomes. The scale is aggressive (`display-lg`: 3.5rem) to create a sophisticated editorial feel.
*   **Headline (Manrope):** Provides structural authority. Use `headline-sm` (1.5rem) for section headers to ensure the user always knows their location within the event lifecycle.
*   **Body & Labels (Inter):** Optimized for high-density information. `body-md` (0.875rem) is the workhorse for event descriptions and AI insights.
*   **Case Styling:** Use `label-md` in All Caps with 0.05em letter spacing for category tags to provide a premium, "labeled" aesthetic.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are often messy. In this system, we use **Tonal Layering** to convey hierarchy.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. The change in hex value creates a soft, natural lift.
*   **Ambient Shadows:** For "floating" AI widgets, use a shadow with a blur of 40px and 4% opacity. The shadow color must be a tint of `on-surface` (#191c1e), never pure black.
*   **The "Ghost Border" Fallback:** If accessibility requirements demand a border, use `outline-variant` (#c7c4d8) at **15% opacity**. 100% opaque borders are strictly forbidden.
*   **Roundedness:** A consistent `xl` (1.5rem / 24px) or `lg` (1rem / 16px) radius must be applied to all cards to maintain the "soft futuristic" vibe.

---

## 5. Components & Interface Primitives

### Buttons
*   **Primary:** A gradient-fill (`primary` to `primary-container`) with white text. Radius: `full` (9999px) for a "pill" look that suggests motion.
*   **Secondary:** `surface-container-high` background with `on-surface` text. No border.
*   **Tertiary/Ghost:** Text-only in `primary` color, becoming `surface-container-low` on hover.

### Cards & Lists
*   **Anti-Divider Rule:** Never use horizontal lines to separate list items. Use 16px–24px of vertical white space or alternating backgrounds (`surface` vs `surface-container-low`).
*   **The Intelligence Card:** For AI-generated event insights, use a `secondary-container` background with a subtle "Glass" overlay to signify its "special" status.

### Specialized "EventPilot" Components
*   **The Timeline Rail:** A vertical track using `outline-variant` at 20% opacity. Event "Nodes" are `primary` dots that glow using a 12px `primary-fixed-dim` outer shadow.
*   **Live Status Chips:** Use `secondary` (#712ae2) for active states with a soft pulsing animation to denote "Live Now."

---

## 6. Do’s and Don'ts

### Do:
*   **Use Asymmetry:** Place a large headline on the left and a glass-morphic card overlapping it on the right.
*   **Embrace White Space:** Let the `surface` background breathe. Premium feel comes from what you *don't* put on the screen.
*   **Accessible Contrast:** Ensure all `on-surface` text against `surface` containers meets WCAG AA standards.

### Don’t:
*   **Don't Use 1px Borders:** It breaks the "Ethereal" immersion and makes the product look like a generic bootstrap template.
*   **Don't Use Pure Black:** Even for shadows or text. Always use the `on-surface` (#191c1e) or `inverse_surface` (#2d3133) tokens.
*   **Don't Over-Corner:** While cards are `xl` (24px), small elements like checkboxes should stay at `sm` (4px) to maintain a crisp, professional edge.