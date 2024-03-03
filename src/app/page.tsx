import {
  columns,
  studentTasks,
} from "@/components/tables/student-task-table/columns";
import { DataTable } from "@/components/tables/student-task-table/data-table";

const Home = () => {
  return (
    <main className="p-20">
      <DataTable columns={columns} data={studentTasks} />
    </main>
  );
};

export default Home;
