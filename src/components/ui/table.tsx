"use client";

import { useMemo, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  TableOptions,
  useReactTable,
} from "@tanstack/react-table";

import Skeleton from "./skeleton";
import cn from "@/utils/formatter";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import { ArrowsUpDownIcon } from "@heroicons/react/16/solid";

interface CustomTableProps<T extends { id: any }>
  extends Omit<TableOptions<T>, "data" | "getCoreRowModel"> {
  data: T[] | undefined;
  scrollable?: boolean;
  loading?: boolean;
  classNames?: {
    wrapper?: string;
    table?: string;
  };
}

export default function Table<T extends { id: any }>({
  data: dataProp,
  loading,
  columns,
  enableRowSelection = false,
  scrollable = true,
  classNames,
  state,
  ...tableOptions
}: CustomTableProps<T>) {
  const memoizedData = useMemo(
    () => dataProp || Array(10).fill({}),
    [dataProp]
  );
  const [sorting, setSorting] = useState<SortingState>([]);

  const tableColumns = useMemo(
    () =>
      loading
        ? columns.map((column) => ({
            ...column,
            cell: () => <Skeleton />,
          }))
        : columns,
    [loading, columns]
  );

  const table = useReactTable({
    data: memoizedData,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    enableRowSelection,
    getRowId: (row) => row.id,
    onSortingChange: (sorting) => {
      setSorting(sorting);
    },
    state: {
      sorting,
      ...state,
    },
    ...tableOptions,
  });

  return (
    <div
      className={cn(
        scrollable && "overflow-auto",
        classNames?.wrapper,
        "w-full grow basis-0"
      )}
    >
      <table className={cn("w-full table-fixed", classNames?.table)}>
        <thead className={"sticky top-0 z-10 border-b border-b-gray-200"}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={
                    "px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-400"
                  }
                  style={{
                    width: header.getSize(),
                  }}
                >
                  <div
                    className="flex gap-1"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    {header.column.getCanSort() &&
                      ({
                        asc: <ArrowDownIcon className="h-4 w-4 shrink-0" />,
                        desc: <ArrowUpIcon className="h-4 w-4 shrink-0" />,
                      }[header.column.getIsSorted() as string] ?? (
                        <ArrowsUpDownIcon className="h-4 w-4 shrink-0" />
                      ))}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length === 0 ? (
            <tr>
              <td colSpan={table.getAllColumns().length} className={"p-0"}>
                <div className="flex h-[159px] items-center justify-center">
                  <h1 className={"text-lg text-gray-500"}>No results found</h1>
                </div>
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={cn(
                  row.getIsSelected() && "bg-gray-50",
                  "hover:bg-gray-50 dark:hover:bg-blue-950 duration-200"
                )}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={cn(
                      "truncate px-5 py-3 font-bold text-sm text-slate-600 dark:text-white",

                      cell.column.id === "action" && "text-center"
                    )}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
