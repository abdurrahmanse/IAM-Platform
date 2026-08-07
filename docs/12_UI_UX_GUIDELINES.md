# 12 UI/UX GUIDELINES

## Objective
To mandate a cohesive, accessible, and premium design language across all frontend portals (Admin, User, Public).

## Why
Enterprise IAM platforms require high trust. Inconsistent spacing, colors, or accessibility failures break user trust and make complex configurations (like RBAC) dangerous to manage.

## How
- **Design System:** Build exclusively on top of Tailwind CSS and `shadcn/ui`.
- **Color Tokens:** Use CSS variables defined in `globals.css` (e.g., `--primary`, `--destructive`). Do not hardcode raw hex values in components.
- **Typography:** Enforce a single font family (e.g., Inter or Roboto) with strict hierarchy (H1 -> H4, Body, Muted).
- **Dark Mode:** All components must support light and dark modes inherently via Tailwind`s `dark:` variant.

## When
Applied during the implementation of every frontend feature.

## Best Practices
- **Accessibility (a11y):** Ensure all interactive elements have proper ARIA attributes, focus rings for keyboard navigation, and sufficient color contrast.
- **Loading States:** Prefer Skeleton loaders over full-page spinners to reduce perceived latency.
- **Error States:** Forms must show inline validation errors immediately upon blur (Zod + React Hook Form). Global errors must use Toast notifications.

## Required Tools
- Tailwind CSS
- shadcn/ui (Radix Primitives)
- Lucide Icons (or similar consistent icon set)

## Forbidden Practices
- Writing custom CSS in `.css` modules unless absolutely impossible to achieve with Tailwind utility classes.
- Hardcoding `px` values for spacing or typography; always use Tailwind`s `rem` based scale.
- Relying entirely on color to convey meaning (e.g., a red border on an error; must include text/icon).

## Success Criteria
- The application scores >95 on Lighthouse Accessibility audits.
- Changing the primary theme color requires editing exactly one CSS variable.
