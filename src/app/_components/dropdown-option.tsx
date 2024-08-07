"use client";
import Dropdown from "@/components/ui/dropdown";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import {
  BriefcaseIcon,
  Cog6ToothIcon,
  LightBulbIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function DropdownOption() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dropdown open={isOpen} onOpenChange={setIsOpen}>
      <Dropdown.Trigger asChild>
        <button className="p-2 bg-indigo-50 dark:bg-blue-950 dark:hover:bg-blue-950/35 hover:bg-indigo-100 rounded-lg active:bg-indigo-300 duration-300 transition-colors">
          <EllipsisHorizontalIcon className="size-5 text-indigo-600 dark:text-white" />
        </button>
      </Dropdown.Trigger>
      <Dropdown.Content isOpen={isOpen} align="end" sideOffset={0} asChild>
        <div className="dark:bg-blue-950 bg-white rounded-2xl p-3">
          <Dropdown.Item
            onClick={() => setIsOpen(!isOpen)}
            className="text-xs hover:text-gray-500 dark:text-white text-slate-500 duration-300"
          >
            <UserIcon className="size-5" />
            Panel 1
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => setIsOpen(!isOpen)}
            className="text-xs hover:text-gray-500 dark:text-white text-slate-500 duration-300"
          >
            <BriefcaseIcon className="size-5" />
            Panel 2
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => setIsOpen(!isOpen)}
            className="text-xs hover:text-gray-500 dark:text-white text-slate-500 duration-300"
          >
            <LightBulbIcon className="size-5" />
            Panel 3
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => setIsOpen(!isOpen)}
            className="text-xs hover:text-gray-500 dark:text-white text-slate-500 duration-300"
          >
            <Cog6ToothIcon className="size-5" />
            Panel 4
          </Dropdown.Item>
        </div>
      </Dropdown.Content>
    </Dropdown>
  );
}
