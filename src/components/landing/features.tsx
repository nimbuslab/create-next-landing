import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Layers, Rocket } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built with Next.js 16 and Turbopack for blazing-fast development and production builds.",
  },
  {
    icon: Shield,
    title: "Type Safe",
    description:
      "Full TypeScript support with strict mode enabled. Catch errors before they happen.",
  },
  {
    icon: Layers,
    title: "Modern Stack",
    description:
      "React 19, Tailwind CSS 4, and shadcn/ui components. The latest and greatest.",
  },
  {
    icon: Rocket,
    title: "Production Ready",
    description:
      "SEO optimized, accessible, and performant out of the box. Deploy with confidence.",
  },
];

export function Features() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Everything you need
        </h2>
        <p className="mb-12 text-lg text-muted-foreground">
          A complete foundation for building high-converting landing pages.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="border-0 bg-muted/50">
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
