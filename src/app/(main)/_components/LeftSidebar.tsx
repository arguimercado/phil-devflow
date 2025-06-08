import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import ROUTE from "@/constants/route";

import NavLinks from "./navbar/NavLinks";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky top-0 left-0 h-screen flex flex-col justify-between border-r p-6 pt-20 max-sm:hidden lg:w-[266px] overflow-y-auto shadow-light-300 dark:shadow-none">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks isMobileNav={false} />
      </div>
      <div className="flex flex-col gap-3">
        <Button
          className="small-medium btn-secondary min-h-[41px] w-full rounded-sm px-4 py-3 border !shadow-none"
          asChild
        >
          <Link href={ROUTE.SIGNIN}>
            <Image
              src="/icons/account.svg"
              alt="Account Icon"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Link>
        </Button>
        <Button
          className="small-medium light-border-2 btn-tertiary text-dark-400_light-900 min-h-[41px] w-full rounded-sm border px-4 py-3 !shadow-none"
          asChild
        >
          <Link href={ROUTE.SIGNUP}>
            <Image
              src="/icons/sign-up.svg"
              alt="Account Icon"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />

            <span className="max-lg:hidden">Sign Up</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LeftSidebar;
