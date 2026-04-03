"use client";

export function SocialsFoooter() {
  return (
    <footer className="w-full py-12 md:py-16 border-t border-border/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl mx-auto gap-8 md:gap-0">
        {/* Left: Name */}
        <div className="font-headline font-black text-lg">
          Abraham Moncherry
        </div>

        {/* Center: Social Links */}
        <div className="flex gap-8">
          <a
            href="https://linkedin.com/in/abrahammoncherry"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-label uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Abraham-Moncherry"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-label uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:abraham.m.moncherry@gmail.com"
            className="text-xs font-label uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-xs font-label uppercase tracking-widest text-muted-foreground">
          © 2025 Abraham Moncherry
        </div>
      </div>
    </footer>
  );
}
