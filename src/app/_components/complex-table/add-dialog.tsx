"use client";
import Button from "@/components/ui/button";
import Dialog from "@/components/ui/dialog";
import Select from "@/components/ui/select";

import TextField from "@/components/ui/textfield";
import { PlusIcon } from "@heroicons/react/20/solid";

import { useState } from "react";

type ComplexTableFormState = {
  name: string;
  status: string;
  progress: number;
  date: string;
};

const statusOptions = [
  {
    label: "Approved",
    value: "Approved",
  },
  {
    label: "Disable",
    value: "Disable",
  },
  {
    label: "Error",
    value: "Error",
  },
];

export default function AddDialog({
  onSubmit,
}: {
  onSubmit: (data: ComplexTableFormState) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState<ComplexTableFormState>({
    name: "",
    progress: 0,
    status: "",
    date: "",
  });

  const handleSubmit = () => {
    onSubmit(formState);
    setFormState({
      name: "",
      progress: 0,
      status: "",
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
            status: "",
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
          <Select
            label="Status"
            name="Status"
            options={statusOptions}
            value={statusOptions.find(
              (option) => option.value === formState.status
            )}
            onChange={(e) => {
              const { value } = e as { label: string; value: string };

              setFormState({ ...formState, status: value });
            }}
            className="w-full"
            required
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
