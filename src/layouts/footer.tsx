export function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Tony's Portfolio. All rights
              reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
