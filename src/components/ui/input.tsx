import cn from "@/utils/formatter";
import { forwardRef, InputHTMLAttributes, ReactNode, Ref } from "react";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  starticon?: ReactNode;
  size?: "sm" | "md" | "lg";
}
const CustomInput = (
  { starticon, size = "md", className, ...props }: InputProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <div
      className={cn(
        "flex w-full items-center bg-slate-100 dark:bg-midnight-950 rounded-full gap-3",
        {
          "py-2 px-3 text-sm": size === "sm",
          "p-3": size === "md",
          "px-3 py-2": size === "lg",
        },
        className
      )}
    >
      {starticon}
      <input
        {...props}
        ref={ref}
        className="bg-transparent border-none outline-none w-full"
      />
    </div>
  );
};
CustomInput.displayName = "CustomInput";
const Input = forwardRef(CustomInput);

export default Input;
