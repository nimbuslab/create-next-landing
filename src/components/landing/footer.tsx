import { Github, Twitter } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
          {/* Brand and description */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/nimbuslab-symbol.svg"
                alt="nimbuslab"
                width={36}
                height={36}
              />
              <span className="font-heading text-xl font-bold">create-next-landing</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              The fastest way to ship beautiful landing pages. Built by{" "}
              <a
                href="https://nimbuslab.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                nimbuslab
              </a>{" "}
              with modern web technologies.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/nimbuslab/create-next-landing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background hover:bg-muted hover:border-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/nimbuslab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background hover:bg-muted hover:border-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold mb-3 text-sm font-heading">Product</h3>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a href="#features" className="hover:text-primary transition-colors">
                  Features
                </a>
                <a href="#how-it-works" className="hover:text-primary transition-colors">
                  How it Works
                </a>
                <a href="#showcase" className="hover:text-primary transition-colors">
                  Showcase
                </a>
                <a href="#tech-stack" className="hover:text-primary transition-colors">
                  Tech Stack
                </a>
              </nav>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-sm font-heading">Resources</h3>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a
                  href="https://github.com/nimbuslab/create-next-landing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Documentation
                </a>
                <a
                  href="https://github.com/nimbuslab/create-next-landing/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Support
                </a>
                <a
                  href="https://github.com/nimbuslab/create-next-landing/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Changelog
                </a>
              </nav>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-sm font-heading">Company</h3>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a
                  href="https://nimbuslab.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  About nimbuslab
                </a>
                <a
                  href="https://github.com/nimbuslab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} nimbuslab. Released under MIT License.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with{" "}
            <span className="text-foreground font-medium">create-next-landing</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
