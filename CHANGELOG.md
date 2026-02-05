# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
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
  - 12+ technologies listed
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
- Updated metadata in layout.tsx with better SEO
- Improved color gradients using nimbuslab orange (#FF5500)
- Enhanced dark mode support across all components
- Better mobile responsiveness for all sections
- Improved typography with Comfortaa and Inter fonts

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
