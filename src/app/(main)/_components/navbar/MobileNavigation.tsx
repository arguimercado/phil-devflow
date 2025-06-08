import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ROUTE from "@/constants/route";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="border-none background-light900_dark200 px-4 py-4"
      >
        <SheetTitle className="hidden">Edit profile</SheetTitle>
        <Link href={"/"} className="flex items-center gap-1 mb-4">
          <Image
            src="/images/site-logo.svg"
            alt="DevFlow Logo"
            width={23}
            height={23}
            className="invert-colors"
          />
          <p className="h3-bold font-space-grotesk text-dark-100 dark:text-light-900">
            PhilDev <span className="text-primary-500">Flow</span>
          </p>
        </Link>

        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex flex-col gap-6" pt-16>
              <NavLinks isMobileNav />
            </section>
          </SheetClose>
          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href={ROUTE.SIGNIN}>
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-sm px-4 py-3 border !shadow-none">
                  <span className="primary-text-gradient">Log In</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={ROUTE.SIGNUP}>
                <Button className="small-medium light-border-2 btn-tertiary text-dark-400_light-900 min-h-[41px] w-full rounded-sm border px-4 py-3 !shadow-none">
                  Sign Up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
