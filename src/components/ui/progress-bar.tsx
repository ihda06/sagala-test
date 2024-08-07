import cn from "@/utils/formatter";
import * as Progress from "@radix-ui/react-progress";
import { ComponentPropsWithoutRef, forwardRef, Ref } from "react";

type ProgressBarProps = ComponentPropsWithoutRef<typeof Progress.Root>;
const ProgressBar = (
  { ...props }: ProgressBarProps,
  ref: Ref<HTMLDivElement>
) => {
  const { value } = props;
  return (
    <Progress.Root
      {...props}
      className={cn(
        "relative overflow-hidden bg-indigo-100 rounded-full h-2 w-14",
        props.className
      )}
      ref={ref}
    >
      <Progress.Indicator
        {...props}
        style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
        className="bg-indigo-600 h-full rounded-full w-full"
      />
    </Progress.Root>
  );
};

export default forwardRef(ProgressBar);
