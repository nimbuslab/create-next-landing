# create-next-landing

> Production-ready Next.js landing page template with AI-friendly documentation and modern best practices.

Build stunning landing pages with the latest web technologies. Optimized for performance, SEO, and AI coding assistants.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nimbuslab/create-next-landing)

[Leia em Português](./docs/README.pt-BR.md)

## Features

✨ **Modern Stack** - Next.js 16, React 19, Tailwind CSS 4, shadcn/ui
🎨 **Beautiful UI** - Pre-built sections with dark mode support
🤖 **AI-Ready** - Auto-generated documentation for Claude Code, Cursor, GitHub Copilot
⚡ **Fast** - Server Components, Turbopack, optimized assets
📱 **Responsive** - Mobile-first design, works everywhere
🔍 **SEO Optimized** - Metadata, sitemap, performance

## Quick Start

### Using nimbuslab CLI (Recommended)

The easiest way with interactive setup:

```bash
npx @nimbuslab/cli create my-landing --landing
cd my-landing
bun dev
```

This will:
- Clone the template
- Set up AI-friendly documentation (AGENTS.md, llms.txt)
- Configure services (email, analytics) interactively
- Generate .env files
- Initialize Git with proper branch flow

### Manual Setup

```bash
# Clone template
bunx degit nimbuslab/create-next-landing my-landing
cd my-landing

# Install dependencies
bun install

# Start development
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see your landing page.

## Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16 | App Router, Server Components, Turbopack |
| **React** | 19 | Latest features and performance |
| **Tailwind CSS** | 4 | Utility-first CSS with CSS-first config |
| **shadcn/ui** | Latest | Accessible, customizable components |
| **TypeScript** | 5.7 | Full type safety (strict mode) |
| **Bun** | 1.0+ | Fast runtime and package manager |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles + CSS variables
├── components/
│   ├── landing/            # Landing page sections
│   │   ├── header.tsx      # Navigation header (sticky)
│   │   ├── hero.tsx        # Hero section
│   │   ├── features.tsx    # Features grid (6 items)
│   │   ├── how-it-works.tsx # 3-step process
│   │   ├── showcase.tsx    # Project examples (4 cards)
│   │   ├── tech-stack.tsx  # Technologies used
│   │   ├── faq.tsx         # FAQ accordion (8 questions)
│   │   ├── cta.tsx         # Call to action
│   │   └── footer.tsx      # Footer with links
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx      # Button component
│   │   ├── card.tsx        # Card component
│   │   └── badge.tsx       # Badge component
│   └── theme-provider.tsx  # Dark mode provider
│   └── theme-toggle.tsx    # Theme switcher
└── lib/
    └── utils.ts            # Utility functions (cn, etc)
```

## Available Scripts

```bash
bun dev         # Start development with Turbopack (fast HMR)
bun build       # Build for production
bun start       # Start production server
bun lint        # Run ESLint
bun typecheck   # Run TypeScript compiler check
```

## Adding Components

Use shadcn/ui to add more components:

```bash
bunx --bun shadcn@latest add button
bunx --bun shadcn@latest add card
bunx --bun shadcn@latest add form
```

Browse all components: [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)

## Customization

### Theme & Colors

Edit `src/app/globals.css` to customize:
- Colors (CSS variables)
- Border radius
- Fonts
- Shadows

### Landing Sections

Components in `src/components/landing/`:
- **header.tsx** - Sticky navigation with theme toggle and mobile menu
- **hero.tsx** - Main headline, gradient text, CTA buttons, command snippet
- **features.tsx** - 6 feature cards showcasing tech stack (Next.js, React, Tailwind, etc)
- **how-it-works.tsx** - 3-step process with icons and commands
- **showcase.tsx** - 4 example projects with images and categories
- **tech-stack.tsx** - Technologies organized by category with badges
- **faq.tsx** - 8 frequently asked questions with accordion
- **cta.tsx** - Final call-to-action with gradient background
- **footer.tsx** - Footer with brand, links, and social icons

Each section is independent and easy to customize or remove. All components are fully responsive and support dark mode.

### Metadata & SEO

Update in `src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Product Name',
  description: 'Your product description',
  // ... more SEO fields
}
```

## AI-Friendly Documentation

When created via `@nimbuslab/cli`, your project includes:

- **AGENTS.md** - Context for Claude Code, Cursor, GitHub Copilot
- **llms.txt** - LLM indexing (ChatGPT, Perplexity)
- **ARCHITECTURE.md** - Design decisions explained
- **EXAMPLES.md** - Common tasks with code
- **.cursorrules** - Cursor AI instructions
- **.github/copilot-instructions.md** - GitHub Copilot context

These files help AI assistants understand your project better, leading to more accurate suggestions.

## Performance

Optimized for Core Web Vitals:

- ✅ **Server Components** - Less JavaScript, faster load
- ✅ **Automatic code splitting** - Per route/component
- ✅ **Image optimization** - next/image with WebP/AVIF
- ✅ **Font optimization** - next/font with preloading
- ✅ **CSS optimization** - Tailwind CSS 4 purge

Target metrics:
- Lighthouse Performance: 95+
- LCP: < 2.0s
- CLS: < 0.05

## Deployment

### Vercel (Recommended)

One-click deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nimbuslab/create-next-landing)

Or via CLI:

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

Build and run:

```bash
docker build -t my-landing .
docker run -p 3000:3000 my-landing
```

### Other Platforms

This template works with:
- Vercel
- Netlify
- Railway
- Dokploy
- Any platform supporting Next.js

## Examples

Sites built with this template:

- Coming soon!

Want to add yours? [Open a PR](https://github.com/nimbuslab/create-next-landing/pulls)

## FAQ

**Q: Can I use npm/pnpm instead of Bun?**
A: Yes, but Bun is faster. Replace `bun` with `npm` or `pnpm` in commands.

**Q: Do I need to use the nimbuslab CLI?**
A: No, but it sets up AI docs and services automatically. Manual setup works fine too.

**Q: Can I remove sections I don't need?**
A: Absolutely! Each section is independent. Just delete the component and import.

**Q: Is this production-ready?**
A: Yes! It follows Next.js and React best practices. Used in production by nimbuslab.

## Contributing

Contributions welcome! Please:
1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Submit a PR

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## Support

- 📖 [Documentation](https://github.com/nimbuslab/create-next-landing)
- 🐛 [Issues](https://github.com/nimbuslab/create-next-landing/issues)
- 💬 [Discussions](https://github.com/nimbuslab/create-next-landing/discussions)

## License

MIT License - see [LICENSE](./LICENSE) for details.

---

**Created by nimbuslab** - Building digital products with design and technology.

Made with care in Brazil 🇧🇷
