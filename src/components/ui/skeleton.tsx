import cn from "@/utils/formatter";
import { HTMLAttributes } from "react";

function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <span
      className={cn(
        "skeleton block h-auto scale-y-75 animate-pulse rounded-md bg-gray-100",
        className
      )}
      {...props}
    />
  );
}

export default Skeleton;
