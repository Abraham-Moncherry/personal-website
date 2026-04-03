"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const links = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About" },
  { href: "/Projects", label: "Projects" },
  { href: "/Blogs", label: "Blogs" },
];

export function NavigationMenuDemo() {
  const pathname = usePathname();

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <NavigationMenuLink
              key={href}
              asChild
              className={`${navigationMenuTriggerStyle()} relative transition-all duration-200 ${
                isActive
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Link href={href}>{label}</Link>
            </NavigationMenuLink>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
