import { Skeleton } from "../ui/skeleton";

function Loading() {
  // Returned JSX
  return (
    <div>
      <Skeleton className="w-full h-[194px] lg:w-1/2 mb-8 rounded" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-12">
        <Skeleton className="h-[70px] rounded" />
        <Skeleton className="h-[70px] rounded" />
        <Skeleton className="h-[70px] rounded" />
        <Skeleton className="h-[70px] rounded" />
      </div>
    </div>
  );
}

export default Loading;
