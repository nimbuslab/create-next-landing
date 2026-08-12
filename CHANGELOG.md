# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Security
- Upgraded `next` and `eslint-config-next` from 16.1.5 to 16.3.0, closing the 28
  open advisories of the 16.1.5 line, including middleware bypass, SSRF in
  rewrites and Server Actions, HTTP request smuggling and denial of service in
  Server Components
- Upgraded `react` and `react-dom` from 19.2.3 to 19.2.8
- `bun audit` goes from 60 vulnerabilities (35 high) to 31 (22 high); `next` no
  longer appears in the report and what remains is transitive tooling
- Added `SECURITY.md` with a private reporting channel

### Added
- **Continuous integration** - `.github/workflows/ci.yml` runs typecheck, lint
  and build on every pull request to `main` and `develop`, and on push to `main`
- **Dockerfile** - Multi-stage build at the repository root, with
  `output: "standalone"` in `next.config.ts`. Dependencies are installed with
  bun; build and runtime use node. Validated by building the image and getting
  HTTP 200 from the running container
- **CONTRIBUTING.md** - Branch flow, commit conventions and the exact
  verification sequence CI runs. The README linked to this file before it existed
- **English README** in `docs/README.md`, with section-by-section parity to the
  Portuguese one
- `lint:fix` script, so that `lint` can verify without rewriting files
- **Header Component** - Sticky navigation with smooth scroll links
  - Mobile responsive menu
  - Theme toggle integration
  - GitHub CTA button
  - Scroll-based background blur effect

- **Enhanced Hero Section**
  - Gradient animated text effect
  - Command line snippet with copy functionality
  - Improved gradient backgrounds with orbs
  - Version badge display

- **Features Section** - Complete redesign
  - 6 feature cards showcasing tech stack
  - Individual gradient icons for each technology
  - Hover effects with subtle animations
  - Categories: Next.js 16, React 19, Tailwind 4, shadcn/ui, TypeScript, Dark Mode

- **How It Works Section**
  - 3-step process: Install → Customize → Deploy
  - Large step numbers with gradient icons
  - Command snippets for each step
  - Visual connector lines between steps

- **Showcase Section**
  - 4 example project cards with images
  - Category badges (B2B, Retail, Services, Product)
  - Hover effects with image zoom
  - Arrow icon overlay on hover

- **Tech Stack Section**
  - Technologies organized by category
  - Interactive badge components
  - 11 technologies listed
  - Categories: Framework, Library, Language, Styling, Components, Primitives

- **FAQ Section**
  - 8 frequently asked questions
  - Smooth accordion animations
  - Fully accessible keyboard navigation
  - Covers common questions about usage, customization, and licensing

- **Enhanced CTA Section**
  - Full gradient background with grid pattern
  - Multiple CTA buttons (Get Started, GitHub)
  - Social proof indicators
  - Improved visual hierarchy

- **Enhanced Footer**
  - Comprehensive link organization
  - Social media icons (GitHub, Twitter)
  - Multiple link categories: Product, Resources, Company
  - nimbuslab branding
  - Copyright and license information

- **UI Components**
  - Badge component for tech stack
  - Theme toggle component with smooth transitions
  - All components follow shadcn/ui patterns

### Changed
- The root `README.md` is now the Portuguese version, properly accented, and the
  English one moved to `docs/README.md`
- `lint` no longer rewrites files: it is `eslint .`, and `eslint . --fix` moved
  to `lint:fix`
- `engines.node` raised from `>=18` to `>=20.9.0`, the actual minimum of Next 16
- Every documented command uses `bun run <script>`. On bun 1.3, `bun build`
  invokes the native bundler and fails with `error: Missing entrypoints`,
  ignoring the `package.json` script
- Updated metadata in layout.tsx with better SEO
- Improved color gradients using nimbuslab orange (#FF5500)
- Enhanced dark mode support across all components
- Better mobile responsiveness for all sections
- Improved typography with Comfortaa and Inter fonts

### Fixed
- The hero command and step 01 of the How it works section told users to run
  `bunx create-next-landing my-app`, a package that returns 404 on npm. Both now
  use `bunx degit nimbuslab/create-next-landing`
- The documented Dockerfile copied `/app/.next/standalone` while
  `next.config.ts` never declared `output: "standalone"`, so the `COPY` broke
- The setup wizard printed `bun build` and wrote it into the generated
  `CLAUDE.md`, `.cursorrules`, `.windsurfrules` and `copilot-instructions.md`
- The generated `CLAUDE.md` described a `src/` tree without `components/landing`
- The Tech Stack section advertised Prettier, which is not in the project
- The FAQ told users to edit a Tailwind config file that does not exist under
  the CSS-first setup of Tailwind 4

### Removed
- `SUMMARY.md`, a 435-line implementation report kept at the repository root
- `docs/README.pt-BR.md`, unaccented and describing an outdated file tree
- Emoji from the README, the footer component and `docs/CUSTOMIZATION.md`
- Unverifiable claims from the README and the FAQ: Lighthouse targets never
  measured, production use by a client, an empty Examples section and a
  Discussions link pointing to a disabled feature

### Technical
- All components use TypeScript with strict mode
- Server Components by default
- Client components only where needed (Header, FAQ, ThemeToggle)
- Optimized images with next/image
- CSS animations for gradient text
- Tailwind CSS utility classes
- Accessible components (ARIA labels, semantic HTML)

## [0.1.0] - 2026-01-26

### Added
- Initial release with basic landing page structure
- Next.js 16 with App Router
- React 19 Server Components
- Tailwind CSS 4 with CSS-first configuration
- shadcn/ui components (Button, Card)
- TypeScript 5.7 strict mode
- Dark mode with next-themes
- Basic Hero, Features, CTA, and Footer sections
- nimbuslab branding and fonts (Comfortaa, Inter, JetBrains Mono)

[Unreleased]: https://github.com/nimbuslab/create-next-landing/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/nimbuslab/create-next-landing/releases/tag/v0.1.0
