import Image from "next/image";
import React from "react";

import { Button } from "../ui/button";

const SocialAuthForm = () => {
  return (
    <div className="mt-10 flex items-center flex-wrap gap-2.5">
      <Button className="btn-login">
        <Image
          src="/icons/github.svg"
          alt="GitHub"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        Log in with GitHub
      </Button>
      <Button className="btn-login">
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
