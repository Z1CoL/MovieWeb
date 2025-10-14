import { Skeleton } from "@/components/ui/skeleton";

export default function MovieDetailLoader() {
  return (
    <div>
      <div className="w-[1450px] flex justify-betweens mt-[100px] mb-[100px]">
        <Skeleton className="h-[40px] rounded-2xl"></Skeleton>
        <Skeleton className="h-2.5 ] rounded-2xl"> </Skeleton>
      </div>

      <div className="w-[1450px] flex justify-between gap-2">
        <Skeleton className=" rounded-2xl w-[290px] h-[422px]" />
        <Skeleton className=" rounded-2xl w-[760px] h-[422px]" />
      </div>

      <Skeleton className=" rounded-2xl w-[1450px] h-[40px]" />
      <Skeleton className=" rounded-2xl w-[1450px] h-[40px]" />
      <Skeleton className=" rounded-2xl w-[450px] h-[40px]" />

      <div>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i}>
            <Skeleton className="h-56  rounded-2xl border-b-2 " />
          </div>
        ))}
      </div>

      <div className="w-[1450px] h-[40px]  rounded-2xl">
        <Skeleton className="w-[140px] h-[35px]" />
        <Skeleton className="w-[88px] h-[24px]" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-56  rounded-2xl"></Skeleton>
            <Skeleton className="h-4  rounded w-3/4"></Skeleton>
            <Skeleton className="h-4  rounded w-1/2"></Skeleton>
          </div>
        ))}
      </div>
    </div>
  );
}
