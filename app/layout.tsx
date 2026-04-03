import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationMenuDemo } from "@/components/navigation-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { SocialsFoooter } from "@/components/socials-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abraham",
  description: "Learn more about Abraham and the things he worked on.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            {/* Frosted glass nav */}
            <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/40">
              <div className="flex items-center justify-between px-4 md:px-6 py-3 max-w-6xl mx-auto">
                <NavigationMenuDemo />
                <ModeToggle />
              </div>
            </header>
            <div className="flex-1">{children}</div>
            <footer className="border-t border-border/40">
              <SocialsFoooter />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
