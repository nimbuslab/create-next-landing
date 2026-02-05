"use client";

import { Download, Palette, Rocket, Copy, Check } from "lucide-react";
import { useState } from "react";

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
    command: "vercel deploy --prod",
  },
];

export function HowItWorks() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (command: string, index: number) => {
    navigator.clipboard.writeText(command);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

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

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="group relative"
              >
                {/* Card with hover effect */}
                <div className="relative h-full rounded-2xl border-2 border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/5">
                  {/* Icon with number badge */}
                  <div className="mb-4 relative inline-block">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted border border-border">
                      <step.icon className="h-7 w-7 stroke-primary" />
                    </div>
                    {/* Number badge - top right corner */}
                    <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary shadow-sm">
                      <span className="text-xs font-bold text-primary-foreground font-heading">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-heading">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Command with copy button */}
                    <div className="mt-3 group/code relative rounded-lg border border-border bg-muted/50 p-2.5 hover:border-primary/50 transition-colors">
                      <code className="text-xs font-mono text-foreground flex items-center justify-between gap-2">
                        <span className="flex items-center gap-2 flex-1 min-w-0">
                          <span className="text-primary flex-shrink-0">$</span>
                          <span className="break-all">{step.command}</span>
                        </span>
                        <button
                          onClick={() => handleCopy(step.command, index)}
                          className="flex-shrink-0 flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors opacity-0 group-hover/code:opacity-100"
                          aria-label="Copy command"
                        >
                          {copiedIndex === index ? (
                            <Check className="h-3.5 w-3.5 text-primary" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" />
                          )}
                        </button>
                      </code>
                    </div>
                  </div>
                </div>

                {/* Connector line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 border-t-2 border-dashed border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
