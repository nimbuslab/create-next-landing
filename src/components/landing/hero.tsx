"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Check } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const command = "bunx degit nimbuslab/create-next-landing my-app";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-sm">
            <span className="mr-2 rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
              v0.1.0
            </span>
            <span className="text-muted-foreground">Built by nimbuslab</span>
          </div>

          {/* Main heading */}
          <h1 className="mb-6 font-heading text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Create stunning{" "}
            <span className="text-primary">
              landing pages
            </span>{" "}
            in minutes
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            The fastest way to launch your next project. Built with Next.js 16, React 19,
            Tailwind CSS 4, and shadcn/ui. Production-ready, type-safe, and beautiful.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row mb-12">
            <Button size="lg" className="gap-2" asChild>
              <a href="#how-it-works">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://github.com/nimbuslab/create-next-landing" target="_blank" rel="noopener noreferrer">
                <Terminal className="h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div>

          {/* Command line - click to copy */}
          <div className="mx-auto max-w-xl">
            <div
              onClick={handleCopy}
              className="group relative rounded-lg border border-border bg-muted/30 p-4 transition-all hover:border-primary cursor-pointer"
            >
              <code className="text-sm font-mono text-foreground flex items-center justify-center gap-2">
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-primary" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <span className="text-primary">$</span>
                    <span>{command}</span>
                  </>
                )}
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
