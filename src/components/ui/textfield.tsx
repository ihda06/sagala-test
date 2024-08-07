import { InputHTMLAttributes, useId } from "react";
import Input from "./input";

export default function TextField({
  label,
  size = "sm",
  ...props
}: { label: string; size?: "sm" | "md" | "lg" } & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
>) {
  const id = useId();

  return (
    <div className="space-y-0.5">
      <label className="text-sm font-medium ml-2" htmlFor={id ?? props.id}>
        {label}
      </label>
      <Input {...props} size={size} id={id ?? props.id} />
    </div>
  );
}
