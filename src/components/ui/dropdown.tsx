"use client";

import { ComponentPropsWithoutRef, forwardRef, Ref } from "react";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import cn from "@/utils/formatter";
import { AnimatePresence, motion } from "framer-motion";

type DropdownProps = {} & ComponentPropsWithoutRef<typeof RadixDropdown.Root>;

export default function Dropdown(props: DropdownProps) {
  return <RadixDropdown.Root {...props} modal={false} />;
}

type DropdownTriggerProps = {} & ComponentPropsWithoutRef<
  typeof RadixDropdown.Trigger
>;
const DropdownTriggerWithoutRef = (
  { asChild, ...props }: DropdownTriggerProps,
  ref: Ref<HTMLButtonElement>
) => {
  return <RadixDropdown.Trigger asChild {...props} ref={ref} />;
};

DropdownTriggerWithoutRef.displayName = RadixDropdown.Trigger.displayName;
Dropdown.Trigger = forwardRef(DropdownTriggerWithoutRef);

const CustomDropdownContent = (
  {
    sideOffset = 4,
    className,
    isOpen,
    children,
    ...props
  }: ComponentPropsWithoutRef<typeof RadixDropdown.Content> & {
    isOpen: boolean;
  },
  ref: Ref<HTMLDivElement>
) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <RadixDropdown.Portal forceMount>
          <RadixDropdown.Content
            {...props}
            sideOffset={sideOffset}
            ref={ref}
            className={cn(
              "z-50 min-w-[8rem] overflow-hidden rounded-2xl px-1 py-1.5 shadow-xl",
              className
            )}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 70, y: -20, z: -20 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                z: 0,
              }}
              exit={{ opacity: 0, scale: 0, x: 70, y: -20, z: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-midnight-900 shadow-lg"
            >
              {children}
            </motion.div>
          </RadixDropdown.Content>
        </RadixDropdown.Portal>
      )}
    </AnimatePresence>
  );
};

CustomDropdownContent.displayName = RadixDropdown.Content.displayName;
Dropdown.Content = forwardRef(CustomDropdownContent);

const CustomDropdownItem = (
  { className, ...props }: ComponentPropsWithoutRef<typeof RadixDropdown.Item>,
  ref: Ref<HTMLDivElement>
) => {
  return (
    <RadixDropdown.Item
      {...props}
      ref={ref}
      className={cn(
        "relative flex gap-1 cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none  hover:dark:bg-blue-950 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
    />
  );
};

CustomDropdownItem.displayName = RadixDropdown.Item.displayName;
Dropdown.Item = forwardRef(CustomDropdownItem);
