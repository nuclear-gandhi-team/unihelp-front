import {
  columns,
  studentCourses,
} from "@/components/tables/student-course-table/columns";
import { DataTable } from "@/components/tables/student-course-table/data-table";

const Page = () => {
  return (
    <div className="grid gap-y-5">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Course Page</h2>
        <p className="text-muted-foreground">
          Here you can see all course data
        </p>
      </div>
      <DataTable columns={columns} data={studentCourses} />
    </div>
  );
};

export default Page;
