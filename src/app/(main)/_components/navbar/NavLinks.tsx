"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

const NavLinks = ({ isMobileNav }: { isMobileNav: boolean }) => {
  const pathname = usePathname();

  return (
    <section className="flex flex-col gap-2">
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <Link
            key={link.route}
            href={link.route}
            className={cn(
              "flex items-center gap-2 py-3  px-2 bg-transparent max-lg:justify-center max-sm:justify-start",
              isActive
                ? "font-bold primary-gradient rounded-lg"
                : "text-dark300_light700"
            )}
          >
            <Image
              src={link.imgURL}
              alt={link.label}
              width={20}
              height={20}
              className={cn({ "inverted-colors": isActive })}
            />
            <span
              className={cn(
                "text-sm",
                isActive ? "base-bold" : "base-medium",
                !isMobileNav && "max-lg:hidden"
              )}
            >
              {link.label}
            </span>
          </Link>
        );
      })}
    </section>
  );
};
export default NavLinks;
