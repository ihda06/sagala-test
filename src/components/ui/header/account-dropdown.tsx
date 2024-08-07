"use client";

import Dropdown from "../dropdown";

import { useState } from "react";

import Link from "next/link";

export default function AccountDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown open={isOpen} onOpenChange={setIsOpen}>
      <Dropdown.Trigger asChild>
        <div className="cursor-pointer px-3 py-2 text-white bg-indigo-700 rounded-full">
          AI
        </div>
      </Dropdown.Trigger>

      <Dropdown.Content isOpen={isOpen} align={"end"} sideOffset={20} asChild>
        <div className="w-[188px] flex flex-col gap-3">
          <div className="p-4 py-2 border-b border-gray-200">👋 Hey, Adela</div>
          <div className="px-4 py-2 flex flex-col gap-3">
            <Link href="/">Profile Settings</Link>
            <Link href="/">Newsletter Settings</Link>
            <Link href="/" className="text-red-500">
              Log out
            </Link>
          </div>
        </div>
      </Dropdown.Content>
    </Dropdown>
  );
}
