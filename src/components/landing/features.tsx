import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Layers, Palette, Package, Moon } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Next.js 16",
    description:
      "Built with the latest Next.js App Router and Turbopack for instant development feedback.",
    gradient: "from-primary to-primary/80",
  },
  {
    icon: Layers,
    title: "React 19",
    description:
      "Leverage the newest React features including Server Components and improved performance.",
    gradient: "from-primary/90 to-primary/70",
  },
  {
    icon: Palette,
    title: "Tailwind 4",
    description:
      "Next-generation CSS framework with CSS-first configuration and zero runtime overhead.",
    gradient: "from-primary to-primary/60",
  },
  {
    icon: Package,
    title: "shadcn/ui",
    description:
      "Beautiful, accessible components built with Radix UI. Fully customizable and yours to own.",
    gradient: "from-primary/80 to-primary/60",
  },
  {
    icon: Shield,
    title: "TypeScript",
    description:
      "100% type-safe with strict mode enabled. Catch errors at build time, not runtime.",
    gradient: "from-primary to-primary/70",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description:
      "Beautiful dark mode included out of the box with next-themes. Toggle with one click.",
    gradient: "from-primary/70 to-primary/50",
  },
];

export function Features() {
  return (
    <section className="container mx-auto px-4 py-24 lg:py-32" id="features">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-5xl">
          Everything you need to{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            ship fast
          </span>
        </h2>
        <p className="text-lg text-muted-foreground sm:text-xl">
          A complete foundation built with the latest and greatest web technologies.
          Production-ready from day one.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card
            key={feature.title}
            className="group relative overflow-hidden border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <CardHeader>
              <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-heading">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </CardContent>

            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all pointer-events-none" />
          </Card>
        ))}
      </div>
    </section>
  );
}
