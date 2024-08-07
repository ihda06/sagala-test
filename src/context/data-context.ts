import { SelectTableData } from "@/const/data-table";
import { create } from "zustand";

interface SelectTableType {
  id: number;
  name: string;
  progress: number;
  quantity: number;
  date: string;
}

interface SelectTableState {
  data: SelectTableType[];
  update: (newValue: SelectTableType) => void;
}

export const useSelectTable = create<SelectTableState>()((set) => ({
  data: SelectTableData,
  update: (newValue) =>
    set((state) => ({ data: { ...state.data, ...newValue } })),
}));
