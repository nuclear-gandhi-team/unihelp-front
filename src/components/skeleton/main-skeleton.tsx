import TableHeaderSkeleton from "@/components/skeleton/components/table-header-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

const MainSkeleton = () => (
  <div className="grid gap-y-5">
    <Skeleton className="w-[270px] h-[56px]" />
    <TableHeaderSkeleton />
    <Skeleton className="w-full h-64 " />
  </div>
);

export default MainSkeleton;
