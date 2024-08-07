import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import Input from "../input";
import ThemeButton from "@/components/layout/theme-button";
import MobileNavigation from "@/components/layout/mobile-navigation";
import NotificationDropdown from "./notification-dropdown";
import InformationDropdown from "./info-dropdown";
import AccountDropdown from "./account-dropdown";

export default function Header({ title }: { title: string }) {
  return (
    <header className="lg:w-[calc(100%-300px)] w-full transition-all duration-200 gap-3 z-20 fixed right-0 top-6 backdrop-blur-sm rounded-lg p-6 lg:flex-nowrap flex-wrap flex justify-between">
      <div className="">
        <h5>Pages / Data Table</h5>
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      <div className="dark:bg-midnight-900 bg-white shadow-lg flex px-3 py-2 lg:w-[400px] w-full text-sm items-center rounded-full gap-3">
        <Input
          starticon={<MagnifyingGlassIcon className="size-5" />}
          placeholder="Search..."
          type="search"
        />

        <MobileNavigation />

        <NotificationDropdown />
        <InformationDropdown />
        <div>
          <ThemeButton />
        </div>
        <AccountDropdown />
      </div>
    </header>
  );
}
