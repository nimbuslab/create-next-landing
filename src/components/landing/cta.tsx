"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Star, Check } from "lucide-react";
import { useState } from "react";

export function CTA() {
  const [copied, setCopied] = useState(false);
  const command = "bunx degit nimbuslab/create-next-landing my-app";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="container mx-auto px-4 py-24 lg:py-32" id="cta">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/50 px-6 py-16 text-center sm:px-12 sm:py-24">
        <div className="relative">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-5xl">
            Start building now
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Create your next landing page in minutes, not days. Production-ready code,
            modern design, and zero configuration. Let&apos;s ship something amazing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              size="lg"
              className="gap-2"
              asChild
            >
              <a href="#how-it-works">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              asChild
            >
              <a href="https://github.com/nimbuslab/create-next-landing" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div>

          {/* Command */}
          <div className="mx-auto max-w-xl">
            <div
              onClick={handleCopy}
              className="rounded-lg border border-border bg-background p-4 cursor-pointer hover:border-primary transition-colors group"
            >
              <code className="text-sm font-mono text-foreground flex items-center justify-center gap-2">
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <span className="text-primary">$</span>
                    <span className="font-semibold">{command}</span>
                  </>
                )}
              </code>
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-primary stroke-primary" />
            <span>Free and open source</span>
            <span className="mx-2">•</span>
            <span>MIT License</span>
          </div>
        </div>
      </div>
    </section>
  );
}
