import cn from "@/utils/formatter";
import { ComponentPropsWithoutRef, forwardRef, Ref } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;
const Button = (
  { className, children, ...props }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) => {
  return (
    <button
      className={cn(
        "p-2 bg-indigo-50 dark:bg-blue-950 dark:hover:bg-blue-950/35 hover:bg-indigo-100 rounded-lg active:bg-indigo-300 duration-300 transition-colors",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
};

export default forwardRef(Button);
