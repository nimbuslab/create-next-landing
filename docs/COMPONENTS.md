# Components Documentation

Complete reference for all landing page components.

## Overview

The landing page consists of 8 main sections, each in its own component file:

```
Header → Hero → Features → How It Works → Showcase → Tech Stack → FAQ → CTA → Footer
```

## Component Details

### 1. Header (`header.tsx`)

**Purpose:** Sticky navigation with smooth scroll and theme toggle

**Features:**
- Sticky positioning with scroll-based styling
- Mobile-responsive hamburger menu
- Theme toggle (light/dark)
- Smooth scroll to sections
- GitHub CTA button

**Props:** None

**Customization:**
```tsx
const navigation = [
  { name: "Features", href: "#features" },
  // Add or modify links
];
```

**Key Classes:**
- `sticky top-0` - Always visible at top
- `backdrop-blur-lg` - Blur effect when scrolled
- `md:flex` / `md:hidden` - Responsive visibility

---

### 2. Hero (`hero.tsx`)

**Purpose:** Main landing section with headline and CTA

**Features:**
- Gradient animated headline text
- Version badge
- Dual CTA buttons (primary + outline)
- Command line snippet
- Animated grid background
- Gradient orb decorations

**Props:** None

**Content to Edit:**
```tsx
// Badge
<span>v0.1.0</span>
<span>Built by nimbuslab with modern tech</span>

// Headline
<h1>Create stunning landing pages in minutes</h1>

// Subheading
<p>The fastest way to launch your next project...</p>

// CTAs
<Button>Get Started</Button>
<Button variant="outline">View on GitHub</Button>

// Command
<code>bunx degit nimbuslab/create-next-landing my-app</code>
```

**Styling:**
- `.animate-gradient` - Custom CSS animation
- Gradient text: `bg-gradient-to-r from-primary to-orange-600 bg-clip-text`
- Grid pattern: `bg-[linear-gradient(...)]`

---

### 3. Features (`features.tsx`)

**Purpose:** Showcase tech stack with visual cards

**Features:**
- 6 feature cards in responsive grid
- Gradient icon backgrounds
- Hover effects with lift and shadow
- Organized as 3x2 grid (desktop) / 2 cols (tablet) / 1 col (mobile)

**Props:** None

**Data Structure:**
```tsx
const features = [
  {
    icon: Zap,              // Lucide React icon
    title: "Next.js 16",    // Feature name
    description: "...",      // Feature description
    gradient: "from-blue-500 to-cyan-500", // Icon gradient
  },
];
```

**Card Features:**
- Icon in gradient circle
- Title using heading font
- Description in muted color
- Hover: lift + shadow + gradient overlay

**Customization:**
- Add/remove features from array
- Change icons from [lucide.dev](https://lucide.dev)
- Modify gradients with Tailwind colors

---

### 4. How It Works (`how-it-works.tsx`)

**Purpose:** Explain the setup process in 3 steps

**Features:**
- 3 numbered steps with visual hierarchy
- Large background step numbers
- Gradient icon circles
- Command snippets for each step
- Connector lines between steps

**Props:** None

**Data Structure:**
```tsx
const steps = [
  {
    icon: Download,         // Icon component
    step: "01",            // Step number
    title: "Install",      // Step title
    description: "...",    // What happens
    command: "$ ...",      // Terminal command
  },
];
```

**Visual Elements:**
- Large faded step number (text-8xl)
- Gradient icon (16x16)
- Command in code block
- Vertical connector line (hidden on mobile)

---

### 5. Showcase (`showcase.tsx`)

**Purpose:** Show example projects/use cases

**Features:**
- 4 project cards with images
- Category badges
- Hover effects (image zoom, arrow reveal)
- Responsive 2-column grid

**Props:** None

**Data Structure:**
```tsx
const showcaseItems = [
  {
    title: "SaaS Platform",
    description: "...",
    image: "https://images.unsplash.com/...",
    category: "B2B",
  },
];
```

**Image Requirements:**
- Aspect ratio: 16:9 (aspect-video)
- Recommended: 800x450px or larger
- Format: JPG/WebP via next/image
- Unsplash format: `photo-{id}?w=800&q=80`

**Effects:**
- Image scales 110% on hover
- Gradient overlay intensifies
- Arrow icon fades in
- Title changes to primary color

---

### 6. Tech Stack (`tech-stack.tsx`)

**Purpose:** Display all technologies used

**Features:**
- Technologies organized by category
- Badge components for each tech
- Hover effects
- Clear categorization

**Props:** None

**Data Structure:**
```tsx
const technologies = [
  { name: "Next.js 16", category: "Framework" },
  { name: "React 19", category: "Library" },
  // ...
];

const categories = [
  "Framework",
  "Library",
  "Language",
  "Styling",
  "Components",
  "Primitives"
];
```

**Badge Variants:**
- Main categories: `bg-card/50 backdrop-blur-sm border`
- Additional tools: `variant="outline" bg-background/50`
- Both have hover states

---

### 7. FAQ (`faq.tsx`)

**Purpose:** Answer common questions with accordion

**Features:**
- 8 pre-written questions
- Smooth accordion animations
- Accessible keyboard navigation
- One-at-a-time or all-open modes (currently one-at-a-time)

**Props:** None

**State:**
```tsx
const [openIndex, setOpenIndex] = useState<number | null>(0);
// null = all closed, number = that index open
```

**Data Structure:**
```tsx
const faqs = [
  {
    question: "What's included?",
    answer: "Long detailed answer...",
  },
];
```

**Interactions:**
- Click question to toggle
- ChevronDown icon rotates
- Smooth height transition
- Active question highlighted

**Accessibility:**
- `aria-expanded` attribute
- Semantic button elements
- Focus states
- Keyboard navigable

---

### 8. CTA (`cta.tsx`)

**Purpose:** Final call-to-action before footer

**Features:**
- Full gradient background (primary to orange)
- Grid pattern overlay
- Dual CTA buttons
- Command snippet
- Social proof text

**Props:** None

**Content:**
```tsx
// Headline
<h2>Start building now</h2>

// Description
<p>Create your next landing page in minutes...</p>

// Buttons
<Button variant="secondary">Get Started</Button>
<Button variant="outline">View on GitHub</Button>

// Command
<code>bunx degit nimbuslab/create-next-landing my-app</code>

// Social proof
<span>Free and open source • MIT License</span>
```

**Background Effects:**
- Grid pattern overlay
- Gradient orbs (white/10 blur-3xl)
- Contrasting white text
- Shadow on entire card

---

### 9. Footer (`footer.tsx`)

**Purpose:** Site footer with links and info

**Features:**
- Brand section with logo and description
- Social media icons
- Link categories (Product, Resources, Company)
- Copyright and attribution
- Responsive layout

**Props:** None

**Sections:**

**Brand (left):**
- Logo + Name
- Description text
- Social icons (GitHub, Twitter)

**Links (right):**
- Product: Features, How it Works, Showcase, Tech Stack
- Resources: Documentation, Support, Changelog
- Company: About, GitHub

**Bottom bar:**
- Copyright year (dynamic)
- License info
- Attribution

**Customization:**
```tsx
// Current year auto-updates
const currentYear = new Date().getFullYear();

// Social links
<a href="https://github.com/yourusername">
<a href="https://twitter.com/yourusername">

// Update all href="#section" to match your sections
```

---

## UI Components

### Button (`ui/button.tsx`)

shadcn/ui button component

**Variants:**
- `default` - Primary background
- `outline` - Border only
- `ghost` - No background
- `secondary` - Secondary background
- `destructive` - Error/danger state
- `link` - Text with underline

**Sizes:**
- `xs` - Extra small
- `sm` - Small
- `default` - Medium
- `lg` - Large
- `icon` - Square icon button

**Usage:**
```tsx
<Button>Default</Button>
<Button variant="outline" size="lg">Large Outline</Button>
<Button variant="ghost" size="icon"><Icon /></Button>
```

---

### Card (`ui/card.tsx`)

shadcn/ui card component

**Subcomponents:**
- `Card` - Container
- `CardHeader` - Top section
- `CardTitle` - Title text
- `CardDescription` - Subtitle text
- `CardContent` - Main content
- `CardFooter` - Bottom section
- `CardAction` - Top-right action area

**Usage:**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Subtitle</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

---

### Badge (`ui/badge.tsx`)

Small label component

**Variants:**
- `default` - Primary background
- `secondary` - Secondary background
- `destructive` - Error state
- `outline` - Border only

**Usage:**
```tsx
<Badge>Default</Badge>
<Badge variant="outline">Outline</Badge>
```

---

## Utility Components

### ThemeProvider (`theme-provider.tsx`)

Wraps app to enable dark mode via next-themes

**Props:**
- `attribute: "class"` - Uses class-based theming
- `defaultTheme: "dark"` - Default to dark mode
- `enableSystem: true` - Respect system preference

**Usage:**
Already configured in `layout.tsx`. No changes needed.

---

### ThemeToggle (`theme-toggle.tsx`)

Button to switch between light/dark modes

**Features:**
- Animated icon transition
- Sun/Moon icons
- Accessible
- Handles hydration properly

**Usage:**
```tsx
<ThemeToggle />
```

Already integrated in Header component.

---

## Styling Patterns

### Section Container

Standard section wrapper:
```tsx
<section className="container mx-auto px-4 py-24 lg:py-32">
  {/* content */}
</section>
```

### Gradient Text

Animated gradient text effect:
```tsx
<span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent animate-gradient">
  Gradient Text
</span>
```

### Glassmorphism Card

Card with blur and transparency:
```tsx
<Card className="bg-card/50 backdrop-blur-sm border-0">
  {/* content */}
</Card>
```

### Hover Lift

Lift effect on hover:
```tsx
<div className="transition-all hover:-translate-y-1 hover:shadow-lg">
  {/* content */}
</div>
```

### Grid Background

Subtle grid pattern:
```tsx
<div className="bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]" />
```

---

## Responsive Breakpoints

Tailwind breakpoints used:

- `sm:` - 640px (small tablets)
- `md:` - 768px (tablets)
- `lg:` - 1024px (laptops)
- No xl/2xl used (keeping it simple)

Common patterns:
```tsx
// Mobile first
className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"

// Hide on mobile
className="hidden md:block"

// Show on mobile only
className="md:hidden"
```

---

## Animation Classes

Custom animations in `globals.css`:

**Gradient Animation:**
```css
.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}
```

**Usage:**
```tsx
<h1 className="bg-gradient-to-r from-primary to-orange-600 animate-gradient">
```

**From tw-animate-css:**
- `animate-in`
- `slide-in-from-top-5`
- See: [tw-animate-css](https://www.npmjs.com/package/tw-animate-css)

---

## Best Practices

### Component Organization

```
1. Imports (external → internal → types)
2. Types/Interfaces
3. Constants/Data
4. Component function
5. Exports
```

### Data Separation

Keep content in data arrays at top of file:
```tsx
const features = [ /* data */ ];

export function Features() {
  return features.map(...)
}
```

Benefits:
- Easy to edit without touching JSX
- Can move to separate file later
- Clear separation of concerns

### Styling

- Use Tailwind utilities
- Avoid custom CSS unless needed
- Use design tokens (--color-primary)
- Keep responsive modifiers consistent

### Accessibility

- Semantic HTML (`section`, `nav`, `header`)
- ARIA labels on icon buttons
- Focus states on interactive elements
- Keyboard navigation support
- Alt text on images

---

## Quick Reference

### Adding a New Section

1. Create file: `src/components/landing/your-section.tsx`
2. Export in `src/components/landing/index.ts`
3. Import in `src/app/page.tsx`
4. Add to JSX

### Modifying Content

All content is in component files as arrays/constants at the top.

### Changing Colors

Edit CSS variables in `src/app/globals.css`

### Adding Icons

Import from lucide-react: `import { IconName } from "lucide-react"`

Browse: [lucide.dev](https://lucide.dev)

---

Need more details on a specific component? Check the source code or open an issue!
