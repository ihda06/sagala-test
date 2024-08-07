import { ComponentPropsWithoutRef, useId } from "react";
import ReactSelect from "react-select";

type SelectProps = ComponentPropsWithoutRef<typeof ReactSelect> & {
  label?: string;
  id?: string;
};
export default function Select({ label, id, ...props }: SelectProps) {
  const innerId = useId();
  return (
    <div className="space-y-0.5">
      {label && (
        <label className="text-sm font-medium ml-2" htmlFor={id ?? innerId}>
          {label}
        </label>
      )}
      <ReactSelect
        {...props}
        id={id ?? innerId}
        minMenuHeight={240}
        maxMenuHeight={240}
        menuPlacement="auto"
        classNames={{
          control: () =>
            "w-full rounded-full border py-2 px-3 text-sm dark:bg-midnight-950 border-none",
          menu: () =>
            "w-full py-1 bg-white rounded-lg border border-gray-300 dark:bg-midnight-900",
          //   //   menuPortal: () => "mt-1",
          option: () =>
            "py-2 px-2 !cursor-pointer hover:bg-indigo-100 dark:hover:bg-blue-950/35",
        }}
        unstyled
      />
    </div>
  );
}
