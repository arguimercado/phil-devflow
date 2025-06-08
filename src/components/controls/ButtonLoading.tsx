import { Loader2 } from "lucide-react";
import React from "react";

import { Button } from "../ui/button"; // shadcn Button

interface ButtonLoadingProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: React.ReactNode;
}

const ButtonLoading: React.FC<ButtonLoadingProps> = ({
  loading = false,
  children,
  disabled,
  ...props
}) => {
  return (
    <Button
      disabled={loading || disabled}
      {...props}
      className={`flex paragraph-medium items-center justify-center gap-2 ${props.className ?? ""}`}
    >
      {loading && <Loader2 className="animate-spin w-5 h-5" />}
      {children}
    </Button>
  );
};

export default ButtonLoading;
