"use client";

import { ColumnDef } from "@tanstack/table-core";
import { ArrowUpDown, ChevronRightIcon } from "lucide-react";

import { TeacherClassesTableProps } from "@/components/tables/teacher-courses-table/teacher-classes-table-props";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<TeacherClassesTableProps>[] = [
  {
    accessorKey: "className",
    header: "Name",
  },
  {
    accessorKey: "classesNumber",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ECTS
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "studentsCount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Number of students
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: () => (
      <Button size="sm" className="w-fit" variant="secondary">
        <ChevronRightIcon size={12} />
      </Button>
    ),
  },
];
