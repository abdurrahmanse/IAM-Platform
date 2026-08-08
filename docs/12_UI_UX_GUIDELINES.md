# 12 UI/UX GUIDELINES

## Objective

Mandate a cohesive, accessible, and premium design language across all frontend portals
(Admin Console, User Portal, Public Website).

---

## ⚠️ MANDATORY RULE — ONE UI FRAMEWORK

> **The entire project uses ONE and ONLY ONE UI framework: Radix UI.**
>
> No other UI library (Material UI, Chakra UI, Ant Design, Mantine, NextUI, etc.)
> may be installed or used. All components are built from Radix UI primitives,
> styled with Tailwind CSS v4, composed with `class-variance-authority` (CVA),
> and exported from the `@iam/ui` package.
>
> This is an **engineering constitution rule** — not a preference.

---

## Technology Stack (Locked)

| Layer         | Technology                                         |
| ------------- | -------------------------------------------------- |
| Primitives    | **Radix UI** (`@radix-ui/*`)                       |
| Styling       | **Tailwind CSS v4** (utility-first, no CSS modules)|
| Variants      | **class-variance-authority (CVA)**                 |
| Merge utility | **tailwind-merge + clsx** via `cn()` helper        |
| Icons         | **Lucide React** (`lucide-react`)                  |
| Font          | **Rajdhani** (Google Fonts, weights 300–700)       |

---

## Design Language

### Aesthetic
Modern enterprise SaaS — bold, legible, professional. NOT glassmorphic blobs.
Inspired by Linear, Vercel, and Stripe dashboards.

### Color System
All colors come from CSS variables defined in `globals.css`.
**Never hardcode hex values in components.**

```
Primary brand:   --color-brand-600   (#4f46e5 Indigo)
Background:      --background        (white / gray-950 in dark)
Text primary:    --color-text-primary (#0f172a / #f8fafc)
Text secondary:  --color-text-secondary (#475569)
```

### Typography
- **Font:** Rajdhani everywhere (configured in `layout.tsx` via `next/font/google`)
- **Hierarchy:** H1 → H4 strictly sized, never skip levels
- **Labels:** `text-xs font-semibold uppercase tracking-widest text-gray-500`

### Spacing
Always use Tailwind's rem-based spacing scale.
Never hardcode `px` values for spacing or typography.

### Dark Mode
All components must support `dark:` variants inherently.
No component should look broken in dark mode.

---

## Component Architecture

All UI components live in `packages/ui/components/` and are exported from `packages/ui/index.ts`.

### SP-01.01 — Global Styles (`packages/design-system/styles/globals.css`)
- Defines all CSS custom properties (`--color-*`, `--radius-*`, `--font-*`)
- Defines `@theme` block for Tailwind v4 token injection
- Contains semantic utility classes (`.surface-card`, `.focus-ring`, `.text-heading`)

### SP-01.02 — Button & Input

**Button** (`Button.tsx`)
- Built on `@radix-ui/react-slot` for `asChild` composition
- Variants: `default` (solid indigo) | `secondary` | `destructive` | `outline` | `ghost` | `link`
- Sizes: `sm` | `default` | `lg` | `icon`
- Props: `loading` (auto spinner) | `asChild` | all standard HTML button attributes

**Input** (`Input.tsx`)
- Native `<input>` with accessible wrapper
- Props: `label` | `hint` | `error` | `startIcon` | `endIcon`
- Error state triggers red border + red ring + updates `aria-invalid`
- Auto-generates `id` with `React.useId()` if none provided

### SP-01.03 — Modal & Dialog (`Dialog.tsx`)
- Built on `@radix-ui/react-dialog`
- Exports: `Dialog`, `DialogTrigger`, `DialogContent`, `DialogHeader`,
  `DialogFooter`, `DialogTitle`, `DialogDescription`, `DialogClose`
- Backdrop: `bg-black/50 backdrop-blur-sm`
- Panel: `bg-white dark:bg-gray-900`, `rounded-2xl`, deep shadow

### SP-01.04 — Application Layouts

**Sidebar** (`Sidebar.tsx`)
- Dark (`bg-gray-950`) vertical navigation panel
- Supports `items[]` with `badge` counts and `current` state
- `logoSlot` prop for custom branding
- Bottom user row with settings link

**Header** (`Header.tsx`)
- Solid white top bar with search, notifications bell, user avatar slot
- Mobile: shows logo + hamburger menu toggle
- Desktop: shows page title

**Footer** (`Footer.tsx`)
- Minimal `h-11` solid white footer with Terms / Privacy / Status links

**AppLayout** (`AppLayout.tsx`)
- Composes Sidebar + Header + Footer around `<main>`
- Mobile: animated slide-in sidebar with backdrop overlay

---

## Accessibility (a11y) Requirements

- All interactive elements MUST have a visible focus ring (`focus:ring-2 focus:ring-indigo-500`)
- Icons used decoratively MUST have `aria-hidden="true"`
- Form inputs MUST have an associated `<label>` (use the `label` prop on `Input`)
- Error states MUST set `aria-invalid` and reference an error message with `aria-describedby`
- Modals MUST trap focus (Radix Dialog handles this automatically)
- Color MUST NOT be the only way to convey meaning (always pair with icon/text)

---

## Forbidden Practices

| ❌ Forbidden                                          | ✅ Instead                                          |
| ----------------------------------------------------- | --------------------------------------------------- |
| Installing any UI library other than Radix UI         | Use `@radix-ui/*` primitives                        |
| Hardcoding hex values in components (`#4f46e5`)       | Use `text-brand-600`, `bg-indigo-600`, or CSS vars  |
| Hardcoded `px` for spacing/font size                  | Use Tailwind rem-based scale                        |
| `bg-white/60 backdrop-blur-xl` as primary bg          | Use solid `bg-white dark:bg-gray-900`               |
| Inline `style={}` for colors or layout                | Use Tailwind utility classes                        |
| Writing `.css` module files                           | Use Tailwind utilities only                         |
| Color-only error indicators                           | Combine red border + error text + `aria-invalid`    |
| Multiple competing UI frameworks                      | **One framework: Radix UI. Non-negotiable.**        |

---

## Success Criteria

- Lighthouse Accessibility score **≥ 95** on all pages
- Changing the primary brand color requires editing **exactly one** CSS variable in `globals.css`
- All components pass `vitest` unit tests in `packages/ui`
- Zero hardcoded color values in component files
- Every interactive element is reachable and operable via keyboard only
