"use client";

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Dropdown from "../dropdown";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useIsMobile from "@/hooks/useIsMobile";

export default function InformationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <Dropdown open={isOpen} onOpenChange={setIsOpen}>
      <Dropdown.Trigger asChild>
        <div className="cursor-pointer">
          <InformationCircleIcon className="size-5" />
        </div>
      </Dropdown.Trigger>

      <Dropdown.Content
        isOpen={isOpen}
        align={isMobile ? "start" : "end"}
        sideOffset={30}
        asChild
      >
        <div className="w-[328px] p-5 flex flex-col gap-3">
          <Image
            src="https://horizon-ui.com/horizon-ui-chakra/static/media/Navbar.f96a9f58c491b9acda99.png"
            alt="Info-image"
            width={400}
            height={400}
            className="w-full h-full rounded-xl"
          />

          <Link href={"/"}>
            <button className="py-3 px-5 w-full text-center bg-indigo-600 font-medium hover:bg-indigo-800 text-white rounded-xl duration-200">
              Buy Horizon UI Pro
            </button>
          </Link>
          <Link href={"/"}>
            <button className="py-3 px-5 w-full text-center border border-gray-700 dark:text-white font-bold hover:bg-neutral-300/55 duration-300 rounded-xl">
              See Documentation
            </button>
          </Link>
          <Link
            href={"/"}
            className="py-3 block font-bold px-5 w-full text-center "
          >
            Try Horizon Free
          </Link>
        </div>
      </Dropdown.Content>
    </Dropdown>
  );
}
