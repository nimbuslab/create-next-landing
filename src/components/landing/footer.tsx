export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">N</span>
            </div>
            <span className="font-semibold">Your Brand</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            Made with{" "}
            <a
              href="https://github.com/nimbuslab/create-next-landing"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-foreground"
            >
              create-next-landing
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
