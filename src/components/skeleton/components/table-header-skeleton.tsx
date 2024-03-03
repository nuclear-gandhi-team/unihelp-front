import { Skeleton } from "@/components/ui/skeleton";

const TableHeaderSkeleton = () => (
  <div className="flex gap-3">
    <Skeleton className="w-[384px] h-[32px] " />
    <Skeleton className="w-[116px] h-[32px] " />
  </div>
);

export default TableHeaderSkeleton;
