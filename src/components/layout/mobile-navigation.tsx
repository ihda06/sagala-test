"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Drawer from "../ui/drawer";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";
import useIsMobile from "@/hooks/useIsMobile";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) {
      setOpen(false);
    }
  }, [isMobile]);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!isMobile || !mounted) return null;
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <Drawer.Trigger asChild>
        <div className="cursor-pointer">
          <Bars3Icon className="size-5 block" />
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Content aria-describedby="mobile-navigation">
          <Drawer.Title className="sr-only" />

          <Drawer.Close className="absolute top-2.5 right-2.5 z-[60] p-1 rounded dark:active:bg-sky-900 active:bg-gray-300">
            <XMarkIcon className="size-5" />
          </Drawer.Close>
          <Sidebar />
        </Drawer.Content>
        <Drawer.Overlay />
      </Drawer.Portal>
    </Drawer>
  );
}
