"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-neutral-950/60">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide text-white hover:text-gray-300 transition"
        >
          3DApp
        </Link>

        {/* SINGLE MENU (Spline Test) */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-300 hover:text-white transition bg-transparent hover:bg-white/10 rounded-md">
                Spline Test
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-neutral-900/95 backdrop-blur-xl border border-white/10 p-3 rounded-lg shadow-xl">
                <ul className="grid gap-2 w-[180px]">
                  <li>
                    <Link
                      href="/spline-test"
                      className={cn(
                        "block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition"
                      )}
                    >
                      Spline Scene
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href="/spline-test/animation"
                      className={cn(
                        "block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition"
                      )}
                    >
                      Animation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/spline-test/model"
                      className={cn(
                        "block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition"
                      )}
                    >
                      Model Load
                    </Link>
                  </li> */}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
