# create-next-landing

Modern landing page template with Next.js 16, React 19, Tailwind CSS 4, and shadcn/ui.

## Quick Start

```bash
bun install
bun setup    # Configure project name and theme
bun dev      # Start development server
```

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **React:** 19 (Server Components)
- **Styling:** Tailwind CSS 4 (CSS-first config)
- **Components:** shadcn/ui (default style)
- **Theme:** next-themes (dark mode default)
- **Package Manager:** Bun

## Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout with ThemeProvider
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── components/
│   ├── ui/           # shadcn/ui components
│   └── theme-provider.tsx
└── lib/
    └── utils.ts      # cn() utility
```

## Adding Components

Use shadcn CLI with Bun:

```bash
bunx --bun shadcn@latest add button
bunx --bun shadcn@latest add card
```

## Conventions

- Use `bun` for all package operations
- Components in PascalCase
- Use `cn()` for conditional classes
- Server Components by default, `"use client"` only when needed
- Dark mode first design

## Common Tasks

### Add a new section
Create component in `src/components/sections/`, import in `page.tsx`

### Change theme default
Edit `src/app/layout.tsx`, change `defaultTheme` prop

### Add new page
Create folder in `src/app/` with `page.tsx`

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [next-themes](https://github.com/pacocoursey/next-themes)
