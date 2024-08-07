"use client";

import { ArrowUpTrayIcon, BellIcon } from "@heroicons/react/24/outline";
import Dropdown from "../dropdown";

import { useState } from "react";

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown open={isOpen} onOpenChange={setIsOpen}>
      <Dropdown.Trigger asChild>
        <div className="cursor-pointer">
          <BellIcon className="size-5" />
        </div>
      </Dropdown.Trigger>

      <Dropdown.Content isOpen={isOpen} align="end" sideOffset={30} asChild>
        <div className="w-[462px] p-3 space-y-6">
          <div className="flex w-full items-center justify-between">
            <p className="text-lg font-medium">Notifications</p>
            <p className="text-sm font-medium">Mark all as read</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-[70px] flex items-center justify-center bg-gradient-to-br from-violet-500 to-sky-500 rounded-xl">
              <ArrowUpTrayIcon className="size-5 text-white" />
            </div>
            <div>
              <h5 className="text-base font-semibold">
                New Update: Horizon UI Dashboard PRO
              </h5>
              <p className="text-sm text-gray-600">
                A new update for your downloaded items is available!
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-[70px] flex items-center justify-center bg-gradient-to-br from-violet-500 to-sky-500 rounded-xl">
              <ArrowUpTrayIcon className="size-5 text-white" />
            </div>
            <div>
              <h5 className="text-base font-semibold">
                New Update: Horizon UI Design System Free
              </h5>
              <p className="text-sm text-gray-600">
                A new update for your downloaded items is available!
              </p>
            </div>
          </div>
        </div>
      </Dropdown.Content>
    </Dropdown>
  );
}
