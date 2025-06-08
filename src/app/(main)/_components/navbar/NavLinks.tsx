"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { sidebarLinks } from "@/constants";

const NavLinks = ({ isMobileNav }: { isMobileNav: boolean }) => {
  const pathname = usePathname();

  return (
    <section className="flex flex-col gap-4">
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <Link
            key={link.route}
            href={link.route}
            className={`flex items-center gap-2 py-4 rounded-lg px-2 ${
              isActive ? "font-bold primary-gradient" : ""
            }`}
          >
            <Image src={link.imgURL} alt={link.label} width={24} height={24} />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </section>
  );
};
export default NavLinks;
