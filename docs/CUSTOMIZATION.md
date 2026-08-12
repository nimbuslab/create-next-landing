# Customization Guide

Complete guide to customizing your landing page built with create-next-landing.

## Table of Contents

- [Colors & Branding](#colors--branding)
- [Typography](#typography)
- [Content](#content)
- [Layout](#layout)
- [Images](#images)
- [Adding/Removing Sections](#addingremoving-sections)

## Colors & Branding

### Primary Color

The template uses **nimbuslab orange (#FF5500)** as the primary color. To change it:

**Option 1: Using design tools**

1. Choose your color in hex format (e.g., `#3B82F6` for blue)
2. Convert to OKLCH using [oklch.com](https://oklch.com/)
3. Update `src/app/globals.css`:

```css
:root {
  --primary: oklch(0.64 0.22 40); /* Replace with your OKLCH values */
}

.dark {
  --primary: oklch(0.68 0.24 40); /* Lighter version for dark mode */
}
```

**Option 2: Quick color swap**

Common colors in OKLCH format:

```css
/* Blue */
--primary: oklch(0.55 0.22 250);

/* Green */
--primary: oklch(0.60 0.20 145);

/* Purple */
--primary: oklch(0.55 0.25 300);

/* Red */
--primary: oklch(0.55 0.22 25);
```

### Logo

Replace the "N" logo in multiple places:

1. **Header** (`src/components/landing/header.tsx`):
```tsx
<span className="text-base font-bold text-white font-heading">N</span>
// Change "N" to your initial or add an image:
<Image src="/logo.svg" alt="Logo" width={24} height={24} />
```

2. **Footer** (`src/components/landing/footer.tsx`):
```tsx
<span className="text-lg font-bold text-white font-heading">N</span>
```

### Company Name

Update in multiple files:

1. **Header** - `src/components/landing/header.tsx`
2. **Footer** - `src/components/landing/footer.tsx`
3. **Metadata** - the `metadata` object in `src/app/layout.tsx`

Global search and replace: `create-next-landing` → `Your Product Name`

## Typography

The template uses three fonts:

- **Comfortaa** - Headings (rounded, friendly)
- **Inter** - Body text (clean, readable)
- **JetBrains Mono** - Code snippets

### Change Fonts

Edit `src/app/layout.tsx`:

```tsx
import { YourHeading, YourBody } from "next/font/google";

const heading = YourHeading({
  variable: "--font-heading",
  subsets: ["latin"],
});

const body = YourBody({
  variable: "--font-body",
  subsets: ["latin"],
});
```

Then update `globals.css`:

```css
--font-sans: var(--font-body);
--font-heading: var(--font-heading);
```

Popular combinations:
- **Modern**: Outfit + Inter
- **Professional**: Poppins + Open Sans
- **Bold**: Montserrat + Lato
- **Elegant**: Playfair Display + Source Sans Pro

## Content

### Hero Section

Edit `src/components/landing/hero.tsx`:

```tsx
// Badge text
<span>Built by nimbuslab with modern tech</span>

// Main headline
<h1>Create stunning landing pages in minutes</h1>

// Subheading
<p>The fastest way to launch your next project...</p>

// Button text
<Button>Get Started</Button>

// Command line
<span>bunx degit nimbuslab/create-next-landing my-app</span>
```

### Features

Edit `src/components/landing/features.tsx`:

Update the `features` array:

```tsx
const features = [
  {
    icon: YourIcon, // From lucide-react
    title: "Your Feature",
    description: "Description of your feature",
    gradient: "from-blue-500 to-cyan-500", // Tailwind gradient
  },
  // ... more features
];
```

Icons from [lucide.dev](https://lucide.dev)

### How It Works

Edit `src/components/landing/how-it-works.tsx`:

Update the `steps` array:

```tsx
const steps = [
  {
    icon: YourIcon,
    step: "01",
    title: "First Step",
    description: "What the user does first",
    command: "$ your command here",
  },
  // ... more steps
];
```

### Showcase

Edit `src/components/landing/showcase.tsx`:

Update the `showcaseItems` array:

```tsx
const showcaseItems = [
  {
    title: "Project Name",
    description: "Brief description",
    image: "https://images.unsplash.com/photo-xxx?w=800&q=80",
    category: "Category",
  },
  // ... more items
];
```

**Finding images:**
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Use format: `https://images.unsplash.com/photo-{id}?w=800&q=80`

### Tech Stack

Edit `src/components/landing/tech-stack.tsx`:

Update the `technologies` array:

```tsx
const technologies = [
  { name: "Your Tech", category: "Framework" },
  // ... more technologies
];
```

Categories: Framework, Library, Language, Styling, Components, Primitives, Tools, Services

### FAQ

Edit `src/components/landing/faq.tsx`:

Update the `faqs` array:

```tsx
const faqs = [
  {
    question: "Your question?",
    answer: "Your detailed answer explaining the topic.",
  },
  // ... more questions
];
```

**Tips for good FAQs:**
- Answer common objections
- Include pricing/licensing info
- Technical requirements
- Support availability
- Comparison with alternatives

### CTA

Edit `src/components/landing/cta.tsx`:

```tsx
// Headline
<h2>Start building now</h2>

// Description
<p>Create your next landing page in minutes...</p>

// Button text
<Button>Get Started</Button>

// Command
<span>bunx degit nimbuslab/create-next-landing my-app</span>
```

### Footer

Edit `src/components/landing/footer.tsx`:

Update the navigation links:

```tsx
<a href="#your-section">Your Link</a>
```

Social links:
```tsx
<a href="https://github.com/yourusername">
<a href="https://twitter.com/yourusername">
```

## Layout

### Change Section Order

Edit `src/app/page.tsx`:

```tsx
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        {/* Reorder, remove, or add sections here */}
      </main>
    </>
  );
}
```

### Remove a Section

1. Delete the import from `page.tsx`
2. Remove from JSX
3. (Optional) Delete the component file

Example - removing Showcase:

```tsx
// Remove this import
import { Showcase } from "@/components/landing";

// Remove from JSX
<Showcase />
```

### Add Custom Section

1. Create `src/components/landing/your-section.tsx`:

```tsx
export function YourSection() {
  return (
    <section className="container mx-auto px-4 py-24">
      <h2>Your Section Title</h2>
      {/* Your content */}
    </section>
  );
}
```

2. Export in `src/components/landing/index.ts`:

```tsx
export { YourSection } from "./your-section";
```

3. Import and use in `src/app/page.tsx`:

```tsx
import { YourSection } from "@/components/landing";

<YourSection />
```

## Images

### Hero Background

Current: Gradient with grid pattern

To use an image instead, edit `src/components/landing/hero.tsx`:

```tsx
<section className="relative overflow-hidden">
  <Image
    src="/hero-bg.jpg"
    alt="Background"
    fill
    className="object-cover"
  />
  <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}

  <div className="container relative z-10">
    {/* Content */}
  </div>
</section>
```

### Showcase Images

Replace Unsplash URLs with your own:

1. Add images to `public/` folder
2. Update paths:

```tsx
image: "/showcase/project-1.jpg"
```

### Optimize Images

Next.js automatically optimizes images with `next/image`:

```tsx
<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  quality={80}
  priority // For above-the-fold images
/>
```

## Adding/Removing Sections

### Common Section Patterns

**Testimonials:**
```tsx
const testimonials = [
  { name, quote, company, avatar }
];
// Map over array with Card components
```

**Pricing:**
```tsx
const plans = [
  { name, price, features: [] }
];
// Grid with feature checkmarks
```

**Team:**
```tsx
const team = [
  { name, role, bio, avatar, social }
];
// Grid with hover effects
```

**Blog/News:**
```tsx
const posts = [
  { title, excerpt, date, image }
];
// Card grid with links
```

### Section Spacing

Consistent spacing pattern:

```tsx
<section className="container mx-auto px-4 py-24 lg:py-32">
  {/* py-24 mobile, py-32 desktop */}
</section>
```

Background variants:
- Default: transparent
- Light accent: `bg-primary/5`
- Card: `bg-card/50 backdrop-blur-sm`
- Gradient: `bg-gradient-to-b from-primary/5 via-background to-background`

## Metadata & SEO

Update `src/app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Your Product | Your Tagline',
  description: 'Your compelling description (150-160 chars)',
  keywords: ['keyword1', 'keyword2'],
  openGraph: {
    images: ['/og-image.jpg'], // 1200x630px
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/twitter-image.jpg'], // 1200x600px
  },
};
```

## Advanced Customization

### Custom Animations

Add to `src/app/globals.css`:

```css
@keyframes your-animation {
  0% { /* start */ }
  100% { /* end */ }
}

.animate-your-animation {
  animation: your-animation 2s ease infinite;
}
```

Use in components:
```tsx
<div className="animate-your-animation">
```

### Custom Components

Follow shadcn/ui patterns:

```tsx
import { cn } from "@/lib/utils"

interface YourComponentProps {
  className?: string;
  // ... other props
}

export function YourComponent({ className, ...props }: YourComponentProps) {
  return (
    <div className={cn("default-classes", className)} {...props}>
      {/* Content */}
    </div>
  );
}
```

### Dark Mode Only Styles

```tsx
<div className="bg-white dark:bg-black">
```

All Tailwind utilities work with `dark:` prefix.

## Need Help?

- [shadcn/ui docs](https://ui.shadcn.com)
- [Tailwind CSS docs](https://tailwindcss.com)
- [Next.js docs](https://nextjs.org/docs)
- [Open an issue](https://github.com/nimbuslab/create-next-landing/issues)

---

**Tip:** Make small changes and test often. Use `bun run dev` for instant feedback.
