<div align="center">

# create-next-landing

**Next.js 16 landing page template, with App Router and Server Components.**
React 19, Tailwind CSS 4, shadcn/ui and an interactive setup that generates documentation for AI assistants.

[Ler em português](../README.md)

[![license](https://img.shields.io/github/license/nimbuslab/create-next-landing?color=FF5500)](../LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-FF5500)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2-FF5500)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-FF5500)](https://tailwindcss.com)

[Installation](#installation) · [Quick start](#quick-start) · [Structure](#project-structure) · [Deploy](#deploy) · [Roadmap](#roadmap)

</div>

---

## Why create-next-landing

- **Nine ready sections**: sticky header, hero, features, how it works, showcase, tech stack, FAQ, CTA and footer, all responsive and dark mode aware
- **Server Components by default**: `"use client"` only in the interactive sections (header, hero, how it works, FAQ and CTA) and in the theme components; features, showcase, tech stack and footer are Server Components
- **Native Tailwind CSS 4**: CSS-first configuration in `src/app/globals.css`, no `tailwind.config.ts`
- **shadcn/ui in the new-york style**: Button, Card and Badge already installed, ready for the rest of the catalog
- **Interactive setup**: `bun run setup` renames the project, sets the default theme and generates the context file for your AI assistant
- **Tested Docker path**: `output: "standalone"` in `next.config.ts` and a multi-stage `Dockerfile` at the root that builds and answers
- **CI included**: typecheck, lint and build on every pull request

## Installation

### With the nimbuslab CLI

The most complete path, with interactive setup and AI documentation:

```bash
bunx @nimbuslab/cli create my-landing --landing
cd my-landing
bun run dev
```

The CLI clones the template, configures services interactively, generates the
context files for AI assistants (`AGENTS.md`, `CLAUDE.md`, `llms.txt`,
`ARCHITECTURE.md`, `EXAMPLES.md`, `.cursorrules` and
`.github/copilot-instructions.md`) and initializes Git.

### Cloning the template directly

```bash
bunx degit nimbuslab/create-next-landing my-landing
cd my-landing
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

> The `@nimbuslab/create-next-landing` package is not published on npm. The two
> paths above are the ones that work today.

## Quick start

Once installed, run the interactive setup:

```bash
bun run setup
```

It asks for the project name, the default theme (`dark`, `light` or `system`)
and which AI assistant you use. Then it:

- rewrites the `name` field in `package.json`;
- switches `defaultTheme` in `src/app/layout.tsx`;
- generates `CLAUDE.md`, `.cursorrules`, `.windsurfrules` or
  `.github/copilot-instructions.md`, based on your answer.

To edit the page content, start at `src/components/landing/hero.tsx` and follow
the composition order in `src/app/page.tsx`.

## Stack

| Technology | Version | Role |
|---|---|---|
| [Next.js](https://nextjs.org) | `16.3` | App Router, Server Components, Turbopack |
| [React](https://react.dev) | `19.2` | UI library |
| [TypeScript](https://www.typescriptlang.org) | `5.9` | Static typing in strict mode |
| [Tailwind CSS](https://tailwindcss.com) | `4.1` | Styling with CSS-first configuration |
| [shadcn/ui](https://ui.shadcn.com) | `new-york` | Accessible components on top of Radix UI |
| [next-themes](https://github.com/pacocoursey/next-themes) | `0.4` | Dark mode, `dark` by default |
| [Lucide](https://lucide.dev) | `0.563` | Icons |
| [ESLint](https://eslint.org) | `9` | Static analysis |
| [Bun](https://bun.sh) | `1.3+` | Runtime and package manager |

Node 20.9 or newer is the minimum required by Next 16.

## Project structure

```
.
├── .github/workflows/ci.yml     # Typecheck, lint and build
├── Dockerfile                   # Multi-stage build with standalone output
├── docs/
│   ├── README.md                # This README, in English
│   ├── COMPONENTS.md            # Component reference
│   └── CUSTOMIZATION.md         # Customization guide
├── scripts/
│   ├── setup.ts                 # Interactive setup wizard
│   └── ai-configs.ts            # AI configuration templates
└── src/
    ├── app/
    │   ├── layout.tsx           # Root layout, fonts and metadata
    │   ├── page.tsx             # Page composition
    │   ├── globals.css          # Design tokens and global styles
    │   └── icon.svg             # Favicon
    ├── components/
    │   ├── landing/
    │   │   ├── header.tsx       # Sticky navigation with mobile menu
    │   │   ├── hero.tsx         # Headline, CTAs and copyable snippet
    │   │   ├── features.tsx     # Six feature cards
    │   │   ├── how-it-works.tsx # Three-step process
    │   │   ├── showcase.tsx     # Four example projects
    │   │   ├── tech-stack.tsx   # Technologies as badges
    │   │   ├── faq.tsx          # Eight questions in an accordion
    │   │   ├── cta.tsx          # Final call to action
    │   │   ├── footer.tsx       # Footer with links and social icons
    │   │   └── index.ts         # Barrel file for the sections
    │   ├── ui/                  # shadcn/ui components
    │   │   ├── button.tsx
    │   │   ├── card.tsx
    │   │   └── badge.tsx
    │   ├── theme-provider.tsx   # next-themes provider
    │   └── theme-toggle.tsx     # Theme switcher
    └── lib/
        └── utils.ts             # Utilities, including cn()
```

## Available scripts

```bash
bun run dev        # Development server with Turbopack
bun run build      # Production build
bun run start      # Production server
bun run lint       # ESLint check, does not modify files
bun run lint:fix   # Applies every fix ESLint can apply
bun run typecheck  # Type check with tsc --noEmit
bun run setup      # Interactive project setup
```

Always use `bun run <script>`. On bun 1.3, `bun build` invokes the native bundler
and fails with `error: Missing entrypoints`, ignoring the `package.json` script.

## Adding components

The template ships with Button, Card and Badge. For the rest of the catalog:

```bash
bunx --bun shadcn@latest add form
bunx --bun shadcn@latest add dialog
bunx --bun shadcn@latest add accordion
```

Full catalog at [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components).

## Customization

### Theme and colors

Design tokens live in `src/app/globals.css` as CSS variables: colors, border
radius, fonts and shadows. The default theme is set in `src/app/layout.tsx`, in
the `defaultTheme` prop of `ThemeProvider`.

### Sections

Every section in `src/components/landing/` is independent. To remove one, delete
the file, drop its export from `index.ts` and its usage from `src/app/page.tsx`.

### Metadata and SEO

Update the `metadata` object in `src/app/layout.tsx`, including `metadataBase`,
`openGraph` and `alternates.canonical`, which today point to the template
repository.

Details in [CUSTOMIZATION.md](./CUSTOMIZATION.md) and the reference for each
component in [COMPONENTS.md](./COMPONENTS.md).

## Deploy

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nimbuslab/create-next-landing)

Or from the command line:

```bash
bunx vercel
```

### Docker

The `Dockerfile` at the root runs a multi-stage build and serves the Next
standalone output:

```bash
docker build -t my-landing .
docker run -p 3000:3000 my-landing
```

Dependencies are installed with bun; the build and the runtime use node, because
`next build` ends in `SIGILL` under the bun runtime inside the container.

### Other platforms

Any platform that runs Next.js works, including Netlify, Railway, Dokploy and
Coolify.

## Roadmap

- [x] Nine landing page sections with dark mode
- [x] Interactive setup generating context for AI assistants
- [x] Standalone output and a validated Dockerfile
- [x] CI with typecheck, lint and build
- [ ] Public hosted demo, to become the repository homepage
- [ ] Portuguese versions of `docs/COMPONENTS.md` and `docs/CUSTOMIZATION.md`
- [ ] First-party showcase images, replacing the remote Unsplash photos
- [ ] Automated accessibility checks in CI

## FAQ

**Can I use npm or pnpm instead of Bun?**
Yes. Replace `bun run` with the equivalent command. The template is tested with
Bun.

**Do I need the nimbuslab CLI?**
No. `bunx degit` delivers the same template. The CLI adds interactive service
configuration and the AI context files.

**Can I remove sections I do not use?**
Yes. Each section is an independent component, with no dependency between them.

**Are the showcase images mine?**
No. `src/components/landing/showcase.tsx` uses remote photos from Unsplash,
allowed in `next.config.ts` through `images.remotePatterns`. Replace them with
your own before publishing.

## Contributing

Read [CONTRIBUTING.md](../CONTRIBUTING.md): branch flow, commit conventions in
Portuguese and the verification sequence CI runs.

To report bugs, open an
[issue](https://github.com/nimbuslab/create-next-landing/issues).
For vulnerabilities, follow [SECURITY.md](../SECURITY.md).

## License

[MIT](../LICENSE) © [nimbuslab](https://nimbuslab.com.br)

<div align="center">

Built in Brasília, DF, Brazil

</div>
