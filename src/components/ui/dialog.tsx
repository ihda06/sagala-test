import cn from "@/utils/formatter";
import * as RadixDialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { ComponentPropsWithoutRef } from "react";

type DialogProps = ComponentPropsWithoutRef<typeof RadixDialog.Root>;
export default function Dialog({ ...props }: DialogProps) {
  return <RadixDialog.Root {...props}></RadixDialog.Root>;
}

const DialogContent = ({
  children,
  className,

  ...props
}: RadixDialog.DialogContentProps) => {
  return (
    <RadixDialog.Portal>
      <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
        <RadixDialog.Overlay asChild>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gray-900/20 dark:bg-gray-950/65"
          ></motion.div>
        </RadixDialog.Overlay>
        <RadixDialog.Content {...props} asChild>
          <div className="h-screen w-screen flex justify-center items-center">
            <motion.div
              className={cn(
                `z-50 flex max-h-[90vh] min-w-[500px] flex-col gap-6 overflow-y-auto rounded-md bg-white p-6 shadow outline-none dark:bg-midnight-900`,
                className
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              {children}
            </motion.div>
          </div>
        </RadixDialog.Content>
      </div>
    </RadixDialog.Portal>
  );
};

Dialog.Trigger = RadixDialog.Trigger;
Dialog.Close = RadixDialog.Close;
Dialog.Title = RadixDialog.Title;
Dialog.Description = RadixDialog.Description;
Dialog.Content = DialogContent;
