"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What's included in the template?",
    answer:
      "Everything you need to build a modern landing page: Next.js 16 with App Router, React 19, Tailwind CSS 4, shadcn/ui components, TypeScript, dark mode, responsive design, and production-ready optimizations. All components are fully customizable and the code is yours to keep.",
  },
  {
    question: "Do I need to know Next.js to use this?",
    answer:
      "Basic React knowledge is helpful, but the template is beginner-friendly. All components are well-documented with clear examples. If you can edit HTML and CSS, you can customize this template. The code is clean and easy to understand.",
  },
  {
    question: "Can I use this for commercial projects?",
    answer:
      "Absolutely! The template is released under the MIT license. Use it for personal projects, client work, SaaS products, or anything else. No attribution required, though we'd love a shoutout if you're feeling generous.",
  },
  {
    question: "Is it mobile-responsive?",
    answer:
      "100%. Every component is built mobile-first and fully responsive. The design looks great on all devices from phones to ultra-wide monitors. We've tested on real devices to ensure a smooth experience everywhere.",
  },
  {
    question: "How do I customize the colors and styling?",
    answer:
      "Super easy. Just edit the CSS variables in globals.css to change your brand colors. All components use these design tokens, so changes are reflected everywhere instantly. You can also customize Tailwind config for more advanced styling.",
  },
  {
    question: "What's the difference between this and other templates?",
    answer:
      "We use the absolute latest versions of everything (Next.js 16, React 19, Tailwind 4), not outdated packages. The code is clean, well-organized, and production-ready. No bloat, no unnecessary dependencies, just what you need to ship fast.",
  },
  {
    question: "Can I get support if I'm stuck?",
    answer:
      "Yep! Open an issue on GitHub and we'll help you out. The community is also friendly and responsive. We're constantly improving the template based on feedback.",
  },
  {
    question: "How often is this updated?",
    answer:
      "We keep dependencies up-to-date and add new features regularly. When Next.js, React, or Tailwind release major updates, we update the template to match. You'll always have access to the latest version.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="container mx-auto px-4 py-24 lg:py-32 bg-muted/30" id="faq">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-5xl">
          Frequently asked{" "}
          <span className="text-primary">
            questions
          </span>
        </h2>
        <p className="text-lg text-muted-foreground sm:text-xl">
          Everything you need to know about create-next-landing. Still have questions?{" "}
          <a href="#" className="text-primary hover:underline">
            Reach out on GitHub
          </a>
          .
        </p>
      </div>

      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg border border-border bg-background overflow-hidden transition-all hover:border-primary"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-start justify-between gap-4 p-6 text-left"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-lg pr-8 font-heading">
                {faq.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200",
                  openIndex === index && "rotate-180 text-primary"
                )}
              />
            </button>

            <div
              className={cn(
                "grid transition-all duration-200 ease-in-out",
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border pt-3">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
