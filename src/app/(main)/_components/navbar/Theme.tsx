"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { Switch } from "@/components/ui/switch";

const Theme = () => {
  const { setTheme, resolvedTheme } = useTheme();

  // Prevent hydration mismatch
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Sun className={`w-5 h-5 ${isDark ? "opacity-50" : "text-yellow-500"}`} />
      <Switch
        checked={isDark}
        onCheckedChange={() => setTheme(isDark ? "light" : "dark")}
        className="data-[state=checked]:bg-zinc-800"
        aria-label="Toggle theme"
      />
      <Moon className={`w-5 h-5 ${isDark ? "text-blue-400" : "opacity-50"}`} />
    </div>
  );
};

export default Theme;
