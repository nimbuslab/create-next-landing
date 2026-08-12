import { Badge } from "@/components/ui/badge";

const technologies = [
  { name: "Next.js 16", category: "Framework" },
  { name: "React 19", category: "Library" },
  { name: "TypeScript 5", category: "Language" },
  { name: "Tailwind CSS 4", category: "Styling" },
  { name: "shadcn/ui", category: "Components" },
  { name: "Radix UI", category: "Primitives" },
  { name: "Lucide Icons", category: "Icons" },
  { name: "next-themes", category: "Theme" },
  { name: "Bun", category: "Runtime" },
  { name: "Turbopack", category: "Bundler" },
  { name: "ESLint", category: "Linting" },
];

export function TechStack() {
  return (
    <section className="py-24 lg:py-32" id="tech-stack">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-5xl">
            Built with the{" "}
            <span className="text-primary">
              best tools
            </span>
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Only the latest and most reliable technologies. No legacy baggage, just modern web development.
          </p>
        </div>

        {/* Tech badges */}
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <Badge
                key={tech.name}
                variant="outline"
                className="px-4 py-2 text-sm font-medium border border-border bg-background hover:border-primary transition-colors cursor-default"
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            All dependencies are up-to-date and actively maintained.{" "}
            <span className="text-foreground font-medium">Zero legacy code.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
