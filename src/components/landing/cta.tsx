import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:px-12 sm:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff1_1px,transparent_1px),linear-gradient(to_bottom,#fff1_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/80">
            Create your landing page in minutes. No design skills required.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="gap-2"
          >
            Start Building
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
