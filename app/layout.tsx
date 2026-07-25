import type { Metadata } from "next";
import Image from "next/image";
import {
  Geist,
  Geist_Mono,
  Manrope,
  Inter,
  Space_Grotesk,
} from "next/font/google";
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

const manrope = Manrope({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Abraham - Portfolio",
  description:
    "AI Software Engineer building with relentless focus on impact. Explore my projects, work, and ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            {/* Frosted glass nav - centered nav, dark mode on right */}
            <header className="sticky top-0 z-50 overflow-hidden border-b border-border/40">
              <Image
                src="/header-plate.png"
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-center dark:brightness-[0.58] dark:saturate-[0.78]"
              />
              <div className="absolute inset-0 bg-background/30 backdrop-blur-[0.5px] dark:bg-background/28" />

              <div className="relative flex items-center justify-between px-4 md:px-6 py-5 md:py-6 max-w-7xl mx-auto w-full">
                {/* Left: Logo */}
                <div className="hidden lg:block min-w-fit">
                  <Image
                    src="/favicon.ico"
                    alt="Abraham"
                    width={30}
                    height={30}
                    className="rounded-full object-cover"
                  />
                </div>

                {/* Center: Navigation */}
                <div className="flex-1 flex justify-center">
                  <NavigationMenuDemo />
                </div>

                {/* Right: Mode Toggle */}
                <div className="min-w-fit">
                  <ModeToggle />
                </div>
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
