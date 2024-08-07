import Link from "next/link";

import {
  ChartBarIcon,
  HomeIcon,
  UserIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

import cn from "@/utils/formatter";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import UpgradeBanner from "../upgrade-banner";

const routes = [
  { name: "Main Dashboard", path: "/", icon: HomeIcon, disable: true },
  { name: "NFT Marketplace", path: "/", icon: ShoppingCartIcon, disable: true },
  {
    name: "Data Tables",
    path: "/",
    icon: ChartBarIcon,
    disable: false,
    active: true,
  },
  { name: "Profile", path: "/", icon: UserIcon, disable: true },
  { name: "Sign In", path: "/", icon: LockClosedIcon, disable: true },
  { name: "RTL Admin", path: "/", icon: HomeIcon, disable: true },
];

export default function Sidebar({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        `max-w-[300px] w-full border-r-2 dark:bg-midnight-900 bg-white h-screen py-6 px-4 `,
        className
      )}
    >
      <div className="flex flex-col h-full justify-between ">
        <div className="divide-y-[0.2px]">
          <div className="text-center py-5">
            <h1 className="text-2xl">
              <b>HORIZON</b> FREE
            </h1>
          </div>
          <div className="px-8 pt-10">
            {routes.map((route) => (
              <Link
                href="/"
                className={cn(
                  `flex gap-3 dark:text-white font-semibold py-2 my-1`,
                  route.active
                    ? "text-neutral-950 border-r-indigo-600 border-r-4"
                    : "text-slate-400 font-normal"
                )}
                key={route.name}
              >
                <route.icon
                  className={cn(`size-5`, route.active && `text-indigo-600`)}
                />{" "}
                {route.name}
              </Link>
            ))}
          </div>
        </div>
        <UpgradeBanner />
      </div>
    </aside>
  );
}
