"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";

export type BillBoardColumn = {
  id: string;
  label: number;
  createdAt: string;
};

export const columns: ColumnDef<BillBoardColumn>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: (row) => <CellAction data={row.row.original} />,
  },
];
