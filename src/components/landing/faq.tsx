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
      "Yes. The template is released under the MIT license. Use it for personal projects, client work, SaaS products, or anything else. No attribution required.",
  },
  {
    question: "Is it mobile-responsive?",
    answer:
      "Every section is built mobile-first with Tailwind breakpoints, including the header menu, the showcase grid and the FAQ accordion. Resize the window or open it on your phone to check before you commit to it.",
  },
  {
    question: "How do I customize the colors and styling?",
    answer:
      "Edit the CSS variables in src/app/globals.css. All components read those design tokens, so a change lands everywhere at once. Tailwind CSS 4 is configured CSS-first, so there is no tailwind.config.ts to edit.",
  },
  {
    question: "What's the difference between this and other templates?",
    answer:
      "It tracks the current major versions of Next.js, React and Tailwind, and CI runs typecheck, lint and build on every pull request. Nine sections ship ready, with no dependency beyond the ones listed in package.json.",
  },
  {
    question: "Can I get support if I'm stuck?",
    answer:
      "Open an issue on GitHub. Security reports go to the private channel described in SECURITY.md instead, so they are not disclosed before a fix ships.",
  },
  {
    question: "How often is this updated?",
    answer:
      "There is no release schedule. Dependency and security fixes land on main and reach you the next time you create a project. Check CHANGELOG.md for what changed and run bun audit on your own project.",
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
