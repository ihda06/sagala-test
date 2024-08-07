"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeButton() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const handleSwitchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button onClick={handleSwitchTheme} className="flex items-center">
      {mounted &&
        (theme === "light" ? (
          <MoonIcon className="size-5 " />
        ) : (
          <SunIcon className="size-5 " />
        ))}
    </button>
  );
}
