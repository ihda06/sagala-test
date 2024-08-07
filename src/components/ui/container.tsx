import cn from "@/utils/formatter";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full rounded-2xl bg-white dark:bg-midnight-900",
        className
      )}
    >
      {children}
    </div>
  );
}
