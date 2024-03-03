"use client";

import AverageGradeStudentGraph from "@/components/modules/main/average-grade-student";
import {
  columns,
  studentTasks,
} from "@/components/tables/student-task-table/columns";
import { DataTable } from "@/components/tables/student-task-table/data-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Layout = () => {
  return (
    <div className="grid gap-y-5">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Main Page</h2>
        <p className="text-muted-foreground">
          Here you can see all student data
        </p>
      </div>
      <DataTable columns={columns} data={studentTasks} />
      <Card className="mb-20">
        <CardHeader>
          <CardTitle>Average Grade</CardTitle>
          <CardDescription>
            Your average grade were calculated for each month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AverageGradeStudentGraph />
        </CardContent>
      </Card>
    </div>
  );
};

export default Layout;
