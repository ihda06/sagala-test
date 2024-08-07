"use client";

import Container from "@/components/ui/container";
import Table from "@/components/ui/table";
import { ComplexTableData } from "@/const/data-table";
import { ColumnFiltersState, createColumnHelper } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";

import ProgressBar from "@/components/ui/progress-bar";

import DropdownOption from "../dropdown-option";

import Button from "@/components/ui/button";
import { TrashIcon } from "@heroicons/react/24/outline";

import AddDialog from "./add-dialog";
import {
  CheckCircleIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import Input from "@/components/ui/input";
import { XCircleIcon } from "@heroicons/react/16/solid";

type ComplexTableType = {
  id: number;
  name: string;
  status: string;
  progress: number;
  date: string;
};
const columnHelper = createColumnHelper<ComplexTableType>();
export default function ComplexTable() {
  const [data, setData] = useState<ComplexTableType[]>([]);
  const [keyword, setKeyword] = useState("");
  const [filter, setFilter] = useState<ColumnFiltersState>([]);
  const columns = useMemo(
    () => [
      columnHelper.accessor("name", {
        header: "Name",
        size: 130,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("status", {
        header: "Status",
        size: 120,
        cell: (info) => {
          const status = info.getValue();
          switch (status) {
            case "Approved":
              return (
                <div className="flex gap-1 items-center">
                  <CheckCircleIcon className="size-7 shrink-0 text-green-600" />
                  {status}
                </div>
              );

            case "Disable":
              return (
                <div className="flex gap-1 items-center">
                  <XCircleIcon className="size-7 shrink-0 text-red-600" />
                  {status}
                </div>
              );

            case "Error":
              return (
                <div className="flex gap-1 items-center">
                  <InformationCircleIcon className="size-7 shrink-0 text-yellow-600" />
                  {status}
                </div>
              );

            default:
              break;
          }
        },
      }),

      columnHelper.accessor("progress", {
        header: "Progress",
        size: 110,
        cell: (info) => {
          const progress = info.getValue();
          return (
            <div className="flex items-center justify-between gap-1">
              <ProgressBar
                value={Number(progress)}
                max={100}
                className="w-full"
              />
            </div>
          );
        },
      }),
      columnHelper.accessor("date", {
        header: "Date",
        size: 120,
        cell: (info) => {
          const date = info.row.original.date;
          return <span>{dayjs(date).format("DD MMM YYYY")}</span>;
        },
      }),
      columnHelper.display({
        id: "actions",
        size: 80,
        cell: (info) => {
          return (
            <Button
              onClick={() => {
                setData(
                  data.filter((item) => item.id !== info.row.original.id)
                );
              }}
            >
              <TrashIcon className="size-5 text-red-600" />
            </Button>
          );
        },
      }),
    ],
    [data]
  );
  useEffect(() => {
    setData(ComplexTableData);
  }, []);
  return (
    <Container className="overflow-x-hidden py-5 space-y-3">
      <div className="flex justify-between items-center px-6 ">
        <div className="flex gap-3 items-center">
          <h5 className="text-lg font-bold text-slate-700 dark:text-white">
            4-Column Table
          </h5>
          <Input
            starticon={<MagnifyingGlassIcon className="size-5" />}
            placeholder="Search by name"
            type="search"
            onChange={(e) => {
              setKeyword(e.target.value);
              setFilter([
                {
                  id: "name",
                  value: e.target.value,
                },
              ]);
            }}
            value={keyword}
            size="sm"
            className="w-48 text-sm"
          />
        </div>
        <div className="flex gap-3">
          <AddDialog
            onSubmit={(newData) => {
              const newId = Math.max(...data.map((item) => item.id)) + 1;

              setData([...data, { ...newData, id: newId }]);
            }}
          />
          <DropdownOption />
        </div>
      </div>
      <Table
        data={data}
        columns={columns}
        classNames={{ table: "overflow-y-hidden" }}
        enableColumnFilters
        state={{ columnFilters: filter }}
      />
    </Container>
  );
}
