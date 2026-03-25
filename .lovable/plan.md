
## Plan: Port Portfolio + Apply Apple Liquid Glass & Advanced Animations

### Overview
Since the ZIP file can't be directly read as text in this environment, I'll extract it using a build-time script to pull all the source files, then port the portfolio into this React project and layer on all the visual upgrades. Here's what gets built:

---

### Step 1 — Extract & Port Existing Portfolio
- Run a Node script at build time to unzip `user-uploads://itsactuallyrayaan-main.zip` and read all HTML/CSS/JS/component files
- Reconstruct every section (Hero, About, Projects, Skills, Contact, etc.) faithfully as React components
- Preserve all original text content, images, project cards, and layout structure
- Wire up routing if multiple pages exist

---

### Step 2 — Liquid Glass Navigation System

**Floating Rounded Navbar:**
- `backdrop-filter: blur(40px) saturate(180%)` + near-zero background opacity (`rgba(255,255,255,0.04)`)
- Thin, luminous border: `1px solid rgba(255,255,255,0.12)` with a subtle inner glow
- Floating pill shape, fixed/sticky, with soft drop shadow
- Smooth scroll-aware shrink: navbar compresses slightly as user scrolls down

**Nav Buttons (Liquid Glass style):**
- Each button has its own glass capsule — hover triggers a glass "fill" animation with `background: rgba(255,255,255,0.08)` + glow
- Active state: brighter tint + soft white border
- Spring-physics transition on hover (cubic-bezier easing, ~16ms frames)

**Dropdown Menus:**
- Full glass panels: heavy blur, ultra-transparent, with layered depth effect
- Enter animation: scale from 0.95 → 1 + fade in, originating from the trigger button
- Each item has individual hover glass highlight
- Rounded corners, subtle border glow

---

### Step 3 — 120hz-Smooth Animation System

**Global animation config:**
- All transitions use `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (Apple's easing)
- `will-change: transform` on all animated elements
- `transform: translateZ(0)` to force GPU compositing
- Duration scale: micro (80ms), standard (240ms), expressive (480ms)

**Scroll-Triggered Reveals (Intersection Observer):**
- Custom `useScrollReveal` hook watching each section
- Elements enter with: `opacity: 0 → 1` + `translateY(30px) → 0`
- Staggered children: each item delays by 60ms (hero text, project cards, skill badges)
- One-shot reveal (no re-trigger on scroll back)

**Magnetic Hover Buttons:**
- Custom `useMagneticHover` hook tracking mouse position relative to button
- Button content shifts up to 8px toward cursor using `transform: translate()`
- Smooth spring return on mouse leave
- Applied to CTAs, project cards, and social links

**Parallax Backgrounds:**
- Hero section background layers scroll at 0.3× and 0.6× speed
- Floating orbs/gradient blobs drift subtly on scroll using `useParallax` hook
- `requestAnimationFrame` loop for silky performance

**Page / Section Transitions:**
- React Router wrapped with a `PageTransition` component
- Outgoing page: fade out + slight scale down (240ms)
- Incoming page: fade in + slide up from 20px (300ms)
- Section-to-section scroll transitions with momentum easing

---

### Step 4 — Additional Modern Enhancements
- **Cursor glow:** Soft radial gradient that follows the cursor (dark theme complement)
- **Hero text:** Animated gradient shimmer on name/title text
- **Project cards:** Glass morphism cards with hover tilt effect (CSS `perspective` + `rotateX/Y`)
- **Skills section:** Animated progress bars or floating badge cloud
- **Noise texture overlay:** Subtle grain on the glass elements (like Apple's surfaces)

---

### Design System Updates
- Dark midnight color palette baked into CSS variables
- Glass tokens: `--glass-bg`, `--glass-border`, `--glass-blur` for consistency
- Animation tokens: duration, easing, delay scales
