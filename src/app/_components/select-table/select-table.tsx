"use client";

import Container from "@/components/ui/container";
import Table from "@/components/ui/table";
import { SelectTableData } from "@/const/data-table";

import { ColumnFiltersState, createColumnHelper } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";

import Checkbox from "@/components/ui/checkbox";
import Input from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import AddDialog from "./add-dialog";
import { TrashIcon } from "@heroicons/react/24/outline";
import Button from "@/components/ui/button";
import DropdownOption from "../dropdown-option";

type CheckTableType = {
  id: number;
  name: string;
  progress: number;
  quantity: number;
  date: string;
};

const columnHelper = createColumnHelper<CheckTableType>();
export default function SelectTable() {
  const [keyword, setKeyword] = useState("");

  const [data, setData] = useState<CheckTableType[]>([]);

  const [filter, setFilter] = useState<ColumnFiltersState>([]);
  const columns = useMemo(
    () => [
      columnHelper.accessor("name", {
        header: "Name",
        cell: (info) => {
          const name = info.getValue();
          return <Checkbox>{name}</Checkbox>;
        },
      }),
      columnHelper.accessor("progress", {
        header: "Progress",
        size: 90,
        cell: (info) => {
          const progress = info.getValue();
          return (
            <div className="flex items-center gap-1">
              <span>{progress}%</span>
            </div>
          );
        },
      }),
      columnHelper.accessor("quantity", {
        header: "Quantity",
        size: 90,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("date", {
        header: "Date",
        size: 125,
        cell: (info) => {
          const date = info.row.original.date;
          return <span>{dayjs(date).format("DD MMM YYYY")}</span>;
        },
      }),
      columnHelper.display({
        id: "actions",
        size: 100,
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
    setData(SelectTableData);
  }, []);

  return (
    <Container className="overflow-x-hidden py-5 space-y-3">
      <div className="flex justify-between items-center px-6 ">
        <div className="flex gap-3 items-center">
          <h5 className="text-lg font-bold text-slate-700 dark:text-white">
            Check Table
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

        {/* <DropdownOption /> */}
      </div>
      <Table
        data={data}
        columns={columns}
        enableColumnFilters
        state={{ columnFilters: filter }}
      />
    </Container>
  );
}
