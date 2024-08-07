"use client";
import Button from "@/components/ui/button";
import Dialog from "@/components/ui/dialog";

import TextField from "@/components/ui/textfield";

import { PlusIcon } from "@heroicons/react/20/solid";

import { useState } from "react";

type SelectTableFormState = {
  name: string;
  progress: number;
  quantity: number;
  date: string;
};

export default function AddDialog({
  onSubmit,
}: {
  onSubmit: (data: SelectTableFormState) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState<SelectTableFormState>({
    name: "",
    progress: 0,
    quantity: 0,
    date: "",
  });

  const handleSubmit = () => {
    onSubmit(formState);
    setFormState({
      name: "",
      progress: 0,
      quantity: 0,
      date: "",
    });
    setIsOpen(false);
  };
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(e) => {
        setIsOpen(e);
        if (!e)
          setFormState({
            name: "",
            progress: 0,
            quantity: 0,
            date: "",
          });
      }}
    >
      <Dialog.Trigger asChild>
        <Button>
          <PlusIcon className="size-5 text-indigo-500 dark:text-white" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title className="text-center font-medium">
          Add New Item
        </Dialog.Title>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          method="post"
          className="space-y-3"
        >
          <TextField
            label="Name"
            type="text"
            name="name"
            placeholder="Name"
            size="sm"
            className="w-full"
            value={formState.name}
            onChange={(e) => {
              setFormState({ ...formState, name: e.target.value });
            }}
            required
          />
          <TextField
            label="Progress"
            type="number"
            placeholder="Progress"
            name="Progress"
            size="sm"
            className="w-full"
            min={0}
            max={100}
            value={formState.progress}
            onChange={(e) => {
              if (Number(e.target.value) > 100) return;
              setFormState({ ...formState, progress: Number(e.target.value) });
            }}
          />
          <TextField
            label="Quantity"
            type="number"
            name="Quantity"
            placeholder="Quantity"
            size="sm"
            className="w-full"
            value={formState.quantity}
            onChange={(e) => {
              setFormState({ ...formState, quantity: Number(e.target.value) });
            }}
          />
          <TextField
            label="Date"
            type="date"
            name="Date"
            placeholder="Date"
            size="sm"
            className="w-full"
            value={formState.date}
            onChange={(e) => {
              setFormState({ ...formState, date: e.target.value });
            }}
            required
          />
          <div className="flex justify-end">
            <Button type="submit" className="px-6 py-2 rounded-lg">
              Add
            </Button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog>
  );
}
