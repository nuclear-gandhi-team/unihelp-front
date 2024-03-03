"use client";

import { ColumnDef } from "@tanstack/table-core";
import { ChevronRightIcon } from "lucide-react";

import { StudentCourseTableProps } from "@/components/tables/student-course-table/student-course-table-props";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<StudentCourseTableProps>[] = [
  {
    accessorKey: "className",
    header: "Name",
  },
  {
    accessorKey: "classesNumber",
    header: "Classes",
  },
  {
    accessorKey: "teacherName",
    header: "Teacher",
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
