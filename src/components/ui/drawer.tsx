"use client";

import { ComponentPropsWithoutRef, forwardRef, Ref } from "react";
import { Drawer as PrimitiveDrawer } from "vaul";
import cn from "@/utils/formatter";
type DrawerProps = ComponentPropsWithoutRef<typeof PrimitiveDrawer.Root>;
export default function Drawer({ direction = "left", ...props }: DrawerProps) {
  return <PrimitiveDrawer.Root direction={direction} {...props} />;
}

Drawer.Trigger = PrimitiveDrawer.Trigger;
Drawer.Portal = PrimitiveDrawer.Portal;

const CustomOverlay = (
  {
    className,
    ...props
  }: ComponentPropsWithoutRef<typeof PrimitiveDrawer.Overlay>,
  ref: Ref<HTMLDivElement>
) => {
  return (
    <PrimitiveDrawer.Overlay
      className={cn("absolute inset-0 z-20 bg-black/40", className)}
      {...props}
      ref={ref}
    />
  );
};

const Overlay = forwardRef(CustomOverlay);

Drawer.Overlay = Overlay;

const CustomContent = (
  {
    className,
    ...props
  }: ComponentPropsWithoutRef<typeof PrimitiveDrawer.Content>,
  ref: Ref<HTMLDivElement>
) => {
  return (
    <PrimitiveDrawer.Content
      className={cn("w-[300px] z-50 h-screen absolute", className)}
      {...props}
      ref={ref}
    />
  );
};

const Content = forwardRef(CustomContent);

Drawer.Content = Content;
Drawer.Close = PrimitiveDrawer.Close;

Drawer.Title = PrimitiveDrawer.Title;
Drawer.Description = PrimitiveDrawer.Description;
