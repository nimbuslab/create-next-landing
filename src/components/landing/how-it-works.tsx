import { Download, Palette, Rocket } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Install",
    description: "Create your project with a single command. No complex setup required.",
    command: "bunx create-next-landing my-app",
  },
  {
    icon: Palette,
    step: "02",
    title: "Customize",
    description: "Edit components, adjust colors, and make it yours. Everything is editable.",
    command: "cd my-app && bun dev",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Deploy",
    description: "Ship to production in minutes with Vercel, Netlify, or your platform of choice.",
    command: "bun run build && deploy",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-5xl">
            Ship your idea in{" "}
            <span className="text-primary">
              three simple steps
            </span>
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            From zero to deployed in under 10 minutes. No joke.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.step}
                className="group relative flex flex-col gap-4"
              >
                {/* Step number and icon */}
                <div className="flex items-start gap-4">
                  <div className="relative">
                    {/* Large step number background */}
                    <div className="text-6xl font-bold text-muted-foreground/10 font-heading">
                      {step.step}
                    </div>

                    {/* Icon card */}
                    <div className="absolute top-0 left-0 flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background">
                      <step.icon className="h-6 w-6 stroke-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <h3 className="mb-2 text-xl font-bold font-heading">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Command */}
                  <div className="rounded-lg border border-border bg-muted/30 p-3">
                    <code className="text-xs font-mono text-foreground flex items-center gap-2">
                      <span className="text-primary">$</span>
                      <span>{step.command}</span>
                    </code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
