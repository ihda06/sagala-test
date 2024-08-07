"use client";

import cn from "@/utils/formatter";
import { CheckIcon } from "@heroicons/react/16/solid";
import * as CheckboxRadix from "@radix-ui/react-checkbox";
import { AnimatePresence, motion } from "framer-motion";
import { ComponentPropsWithoutRef, useId, useState } from "react";

type CheckboxProps = ComponentPropsWithoutRef<typeof CheckboxRadix.Root> & {};
export default function Checkbox({
  className,
  children,
  id,
  checked,
  ...props
}: CheckboxProps) {
  const generatedId = useId();
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <div className={cn("flex items-center gap-3")}>
      <CheckboxRadix.Root
        className={cn(
          "focus:shadow-lg bg-white shrink-0 dark:bg-indigo-900 shadow rounded items-center justify-center border border-gray-500 flex size-4 data-[state=checked]:bg-indigo-600 duration-300",
          className
        )}
        id={id ?? generatedId}
        checked={checked}
        onCheckedChange={(checked) => {
          setIsChecked(checked);
          props.onCheckedChange?.(checked);
        }}
        {...props}
      >
        <AnimatePresence>
          {isChecked && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.15 }}
            >
              <CheckboxRadix.Indicator className="text-white" forceMount>
                <CheckIcon className="size-3.5" />
              </CheckboxRadix.Indicator>
            </motion.div>
          )}
        </AnimatePresence>
      </CheckboxRadix.Root>
      <label className="cursor-pointer" htmlFor={id ?? generatedId}>
        {children}
      </label>
    </div>
  );
}
