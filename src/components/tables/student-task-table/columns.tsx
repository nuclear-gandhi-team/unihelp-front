"use client";

import { ColumnDef } from "@tanstack/table-core";
import { ArrowUpDown, ChevronRightIcon } from "lucide-react";

import { StudentTaskTableProps } from "@/components/tables/student-task-table/student-task-table-props";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const studentTasks: StudentTaskTableProps[] = [
  {
    name: "Math Homework 1",
    maxPoints: 100,
    dateEnd: "2024-03-10",
    className: "Math 101",
    type: "Homework",
  },
  {
    name: "Volcano Eruption Model",
    maxPoints: 50,
    dateEnd: "2024-04-15",
    className: "Earth Science",
    type: "Project",
  },
  {
    name: "Analysis of 'To Kill a Mockingbird'",
    maxPoints: 100,
    dateEnd: "2024-03-20",
    className: "English Literature",
    type: "Essay",
  },
  {
    name: "Analysis of 'To Kill a Revealed'",
    maxPoints: 40,
    dateEnd: "2024-03-20",
    className: "English Literature",
    type: "Essay",
  },
  {
    name: "Homework 1",
    maxPoints: 70,
    dateEnd: "2024-03-20",
    className: "English Literature",
    type: "Essay",
  },
  {
    name: "Rewrite of 'To Kill a Mockingbird'",
    maxPoints: 20,
    dateEnd: "2024-03-20",
    className: "English Literature",
    type: "Essay",
  },
];

export const columns: ColumnDef<StudentTaskTableProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "maxPoints",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Max Points
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <Badge>{`${row.getValue("maxPoints")}/100`}</Badge>,
  },
  {
    accessorKey: "dateEnd",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Due Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "className",
    header: "Class",
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type
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
