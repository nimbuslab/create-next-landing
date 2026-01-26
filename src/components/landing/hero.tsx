import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container relative mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border bg-muted/50 px-4 py-1.5 text-sm">
            <span className="mr-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
              New
            </span>
            Launching something amazing
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Build modern landing pages{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              in minutes
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            A production-ready template with Next.js 16, React 19, Tailwind CSS
            4, and shadcn/ui. Start building beautiful landing pages today.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
