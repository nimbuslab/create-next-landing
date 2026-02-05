import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const showcaseItems = [
  {
    title: "SaaS Platform",
    description: "Complete dashboard with authentication, billing, and analytics",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "B2B",
  },
  {
    title: "E-commerce Store",
    description: "Modern shop with product catalog, cart, and checkout flow",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    category: "Retail",
  },
  {
    title: "Marketing Agency",
    description: "Portfolio showcase with case studies and contact forms",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    category: "Services",
  },
  {
    title: "Mobile App Landing",
    description: "App promotion with features, testimonials, and download CTAs",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    category: "Product",
  },
];

export function Showcase() {
  return (
    <section className="container mx-auto px-4 py-24 lg:py-32" id="showcase">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-5xl">
          Built for{" "}
          <span className="text-primary">
            any project
          </span>
        </h2>
        <p className="text-lg text-muted-foreground sm:text-xl">
          From simple landing pages to complex web applications. Here&apos;s what you can build
          with create-next-landing.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {showcaseItems.map((item) => (
          <Card
            key={item.title}
            className="group relative overflow-hidden border border-border bg-card transition-all hover:border-primary hover:scale-[1.02] cursor-pointer"
          >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden bg-muted">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-block rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold">
                  {item.category}
                </span>
              </div>

              {/* Arrow icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background">
                  <ArrowUpRight className="h-4 w-4 text-primary" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-2">
              <h3 className="text-xl font-bold font-heading group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom note */}
      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          These are just examples. The template is flexible enough for any landing page you can imagine.
        </p>
      </div>
    </section>
  );
}
