// AI configuration templates for different assistants

export const AI_CONFIGS = {
  claude: {
    filename: "CLAUDE.md",
    content: () => `# create-next-landing

Modern landing page template with Next.js 16, React 19, Tailwind CSS 4, and shadcn/ui.

## Quick Start

\`\`\`bash
bun install
bun dev      # Start development server
\`\`\`

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **React:** 19 (Server Components)
- **Styling:** Tailwind CSS 4
- **Components:** shadcn/ui
- **Theme:** next-themes (dark default)
- **Package Manager:** Bun

## Project Structure

\`\`\`
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   └── theme-provider.tsx
└── lib/
    └── utils.ts
\`\`\`

## Adding Components

\`\`\`bash
bunx --bun shadcn@latest add button
bunx --bun shadcn@latest add card
\`\`\`

## Conventions

- Use \`bun\` for all package operations
- Components in PascalCase
- Server Components by default
- Dark mode first design
- Use \`cn()\` for conditional classes

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
`,
  },

  cursor: {
    filename: ".cursorrules",
    content: () => `# Cursor Rules for create-next-landing

You are an expert in Next.js 16, React 19, TypeScript, Tailwind CSS 4, and shadcn/ui.

## Tech Stack
- Next.js 16 with App Router and Turbopack
- React 19 with Server Components
- TypeScript (strict mode)
- Tailwind CSS 4 (CSS-first configuration)
- shadcn/ui components (default style)
- Bun as package manager

## Code Style
- Use functional components with TypeScript
- Prefer Server Components, use "use client" only when necessary
- Use cn() utility for conditional class names
- Follow kebab-case for file names
- Use PascalCase for component names

## File Structure
- Components in src/components/
- Pages in src/app/
- Utilities in src/lib/

## Commands
- bun dev - Start development
- bun build - Production build
- bun lint - Run ESLint

## Preferences
- Dark mode first design
- Mobile-first responsive design
- Accessible components (a11y)
- Clean, minimal code
`,
  },

  copilot: {
    filename: ".github/copilot-instructions.md",
    content: () => `# GitHub Copilot Instructions

## Project: create-next-landing

Modern landing page template with Next.js 16, React 19, Tailwind CSS 4, and shadcn/ui.

## Tech Stack
- Next.js 16 (App Router)
- React 19 (Server Components)
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- Bun

## Coding Standards
- Use TypeScript strict mode
- Prefer Server Components
- Use Tailwind for styling
- Follow shadcn/ui patterns
- Use cn() for class merging

## Do
- Write clean, readable code
- Use semantic HTML
- Follow accessibility best practices
- Prefer composition over inheritance

## Don't
- Use CSS modules or styled-components
- Use class components
- Add unnecessary dependencies
- Ignore TypeScript errors
`,
  },

  windsurf: {
    filename: ".windsurfrules",
    content: () => `# Windsurf Rules

Project: Landing Page

Stack: Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Bun

Style:
- Server Components by default
- "use client" only when needed
- Tailwind utility classes
- cn() for conditional classes
- Dark mode first

Structure:
- src/app/ - Pages (App Router)
- src/components/ - React components
- src/components/ui/ - shadcn components
- src/lib/ - Utilities

Commands:
- bun dev
- bun build
- bun lint
`,
  },
};

export type AIProvider = keyof typeof AI_CONFIGS;
