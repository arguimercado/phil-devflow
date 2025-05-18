"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";
import { toast } from "sonner";

import ROUTE from "@/constants/route";

import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const handleSignin = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTE.HOME,
        // redirect: false,
      });
    } catch (error) {
      toast(`Error signing in ${error}`, {
        description: "Please try again later.",
        duration: 2000,
        className: "!bg-red-500 text-white",
      });
    }
  };
  return (
    <div className="mt-10 flex items-center flex-wrap gap-2.5">
      <Button className="btn-login" onClick={() => handleSignin("github")}>
        <Image
          src="/icons/github.svg"
          alt="GitHub"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        Log in with GitHub
      </Button>
      <Button className="btn-login" onClick={() => handleSignin("google")}>
        <Image
          src="/icons/google.svg"
          alt="Google"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        Log in with Google
      </Button>
    </div>
  );
};

export default SocialAuthForm;
