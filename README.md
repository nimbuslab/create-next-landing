# create-next-landing

A production-ready template for building modern landing pages with the latest web technologies.

[Leia em Portugues](./docs/README.pt-BR.md)

## Stack

- **Next.js 16** - App Router, Server Components, Turbopack
- **React 19** - Latest features and performance improvements
- **Tailwind CSS 4** - Utility-first CSS with CSS-first configuration
- **shadcn/ui** - Accessible, customizable components
- **TypeScript** - Full type safety with strict mode
- **Bun** - Fast JavaScript runtime and package manager

## Quick Start

```bash
# Create a new project
bunx @nimbuslab/create-next-landing my-landing

# Navigate to project
cd my-landing

# Install dependencies
bun install

# Start development server
bun dev
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles and CSS variables
├── components/
│   ├── landing/        # Landing page sections
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   ├── cta.tsx
│   │   └── footer.tsx
│   └── ui/             # shadcn/ui components
└── lib/
    └── utils.ts        # Utility functions
```

## Available Scripts

```bash
bun dev       # Start development server with Turbopack
bun build     # Build for production
bun start     # Start production server
bun lint      # Run ESLint
```

## Adding Components

Use shadcn/ui to add more components:

```bash
bunx --bun shadcn@latest add [component-name]
```

Available components: https://ui.shadcn.com/docs/components

## Customization

### Theme

Edit `src/app/globals.css` to customize colors, radius, and other design tokens.

### Components

Landing page components are in `src/components/landing/`. Each section is a separate component for easy customization.

### Metadata

Update SEO metadata in `src/app/layout.tsx`.

## Performance

This template is optimized for performance:

- Server Components by default
- Automatic code splitting
- Image optimization with next/image
- Font optimization with next/font
- CSS optimization with Tailwind CSS 4

## Deployment

### Vercel (Recommended)

```bash
bunx vercel
```

### Docker

```dockerfile
FROM oven/bun:1 AS builder
WORKDIR /app
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM oven/bun:1-slim
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["bun", "server.js"]
```

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a PR.

## License

MIT License - see [LICENSE](./LICENSE) for details.

---

Made with care in Brazil by [nimbuslab](https://nimbuslab.com.br)
