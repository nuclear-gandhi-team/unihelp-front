"use client";

import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  columns,
  teacherTasks,
} from "@/components/tables/teacher-task-table/columns";
import { DataTable } from "@/components/tables/teacher-task-table/data-table";
import { Button } from "@/components/ui/button";

const Page = () => {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/test/create");
  };

  return (
    <div className="grid gap-y-5">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Course Page</h2>
        <p className="text-muted-foreground">
          Here you can see all course data and add new tasks
        </p>
      </div>
      <Button
        className="h-9 gap-2 items-center justify-center rounded-lg w-full md:w-fit"
        onClick={handleSubmit}
      >
        <PlusCircle size={16} />
        Add task
      </Button>
      <DataTable columns={columns} data={teacherTasks} />
    </div>
  );
};

export default Page;
