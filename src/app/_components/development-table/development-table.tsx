"use client";

import Container from "@/components/ui/container";
import Table from "@/components/ui/table";
import { DevelopmentTableData } from "@/const/data-table";
import { ColumnFiltersState, createColumnHelper } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";

import ProgressBar from "@/components/ui/progress-bar";

import DropdownOption from "../dropdown-option";
import AddDialog from "./add-dialog";
import Button from "@/components/ui/button";
import { TrashIcon } from "@heroicons/react/24/outline";
import AppleIcons from "@/components/icons/apple-icons";
import IconAndroid from "@/components/icons/android-icons";
import IconWindows from "@/components/icons/windows-icons";
import Input from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

type DevelopmentTableType = {
  id: number;
  name: string;
  tech: string[];
  date: string;
  progress: number;
};
const columnHelper = createColumnHelper<DevelopmentTableType>();
export default function DevelopmentTable() {
  const [data, setData] = useState<DevelopmentTableType[]>([]);
  const [keyword, setKeyword] = useState("");
  const [filter, setFilter] = useState<ColumnFiltersState>([]);
  const columns = useMemo(
    () => [
      columnHelper.accessor("name", {
        header: "Name",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("tech", {
        header: "Tech",
        size: 100,
        cell: (info) => {
          const tech = info.getValue();
          return (
            <div className="flex gap-2 text-slate-400">
              {tech.map((item) => {
                switch (item) {
                  case "Apple":
                    return (
                      <AppleIcons key={item} className="size-5 shrink-0 " />
                    );

                  case "Android":
                    return (
                      <IconAndroid key={item} className="size-5 shrink-0 " />
                    );

                  case "Windows":
                    return (
                      <IconWindows key={item} className="size-5 shrink-0 " />
                    );

                  default:
                    break;
                }
              })}
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
      columnHelper.accessor("progress", {
        header: "Progress",
        size: 130,
        cell: (info) => {
          const progress = info.getValue();
          return (
            <div className="flex items-center justify-between gap-1">
              <span>{progress}%</span>
              <ProgressBar
                value={Number(progress)}
                max={100}
                className="w-full"
              />
            </div>
          );
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
    setData(
      DevelopmentTableData.map((item) => ({
        ...item,
        progress: Math.floor(Math.random() * 100),
      }))
    );
  }, []);
  return (
    <Container className="overflow-x-hidden py-5 space-y-3">
      <div className="flex justify-between items-center px-6 ">
        <div className="flex flex-wrap gap-3 items-center">
          <h5 className="text-lg font-bold text-slate-700 dark:text-white">
            Development Table
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
