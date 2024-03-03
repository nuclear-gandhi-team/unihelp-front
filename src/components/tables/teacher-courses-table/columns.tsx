"use client";

import { ColumnDef } from "@tanstack/table-core";
import { ArrowUpDown, ChevronRightIcon } from "lucide-react";

import { TeacherClassesTableProps } from "@/components/tables/teacher-courses-table/teacher-classes-table-props";
import { Button } from "@/components/ui/button";

export const teacherCourses: TeacherClassesTableProps[] = [
  {
    name: "Math",
    classesNumber: 45,
    studentsCount: 251,
    classId: 3,
  },
  {
    name: "Programming basics - 1. Basic constructions",
    classesNumber: 150,
    studentsCount: 272,
    classId: 1,
  },
  {
    name: "Programming basics - 2. Modular programming",
    classesNumber: 150,
    studentsCount: 191,
    classId: 2,
  },
  {
    name: "Web",
    classesNumber: 60,
    studentsCount: 251,
    classId: 5,
  },
  {
    name: "Gema design and development",
    classesNumber: 25,
    studentsCount: 251,
    classId: 4,
  },
  {
    name: "Lalalala",
    classesNumber: 10,
    studentsCount: 251,
    classId: 6,
  },
  {
    name: "Math",
    classesNumber: 45,
    studentsCount: 251,
    classId: 7,
  },
];

export const columns: ColumnDef<TeacherClassesTableProps>[] = [
  {
    accessorKey: "name",
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
