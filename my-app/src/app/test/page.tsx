import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col ">
      <div>
        <div className="w-[1450px] flex justify-betweens mt-[100px] mb-[100px]">
          <Skeleton className="h-[40px] rounded-2xl"></Skeleton>
          <Skeleton className="h-2.5 rounded-2xl"> </Skeleton>
        </div>

        <div className="w-[1450px] flex justify-between ">
          <Skeleton className=" rounded-2xl w-[290px] h-[422px]" />
          <Skeleton className=" rounded-2xl w-[760px] h-[422px]" />
        </div>

        <div className="flex flex-col gap-2.5 mt-[20px]">
          <Skeleton className=" rounded-2xl w-[1450px] h-[40px]" />
          <Skeleton className=" rounded-2xl w-[1450px] h-[40px]" />
          <Skeleton className=" rounded-2xl w-[450px] h-[40px]" />
        </div>

        <div className="flex flex-col gap-[]">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i}>
              <Skeleton className="h-[36px] w-[360px] rounded-2xl mb-[20px] mt-[20px]" />
              <Skeleton className="border-b-2 w-[1450px]"></Skeleton>
            </div>
          ))}
        </div>

        <div className="w-[1450px] h-[40px]  rounded-2xl mt-[20px]">
          <Skeleton className="w-[140px] h-[35px] mt-[20px]" />
          <Skeleton className="w-[88px] h-[24px] mt-[10px]" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-[40px]">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-56  rounded-2xl"></Skeleton>
              <Skeleton className="h-4  rounded w-3/4"></Skeleton>
              <Skeleton className="h-4  rounded w-1/2"></Skeleton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

{
  /* 
            <div className="mt-8">
              <Pagination>
                <PaginationContent>
                  {page > 1 && (
                    <PaginationItem>
                      <PaginationPrevious
                        href={`/Genre/${genreId}?page=${page - 1}`}
                      />
                    </PaginationItem>
                  )}

                  {Array.from(
                    { length: Math.min(5, moviesData.total_pages) },
                    (_, i) => {
                      const pageNum = i + 1;
                      return (
                        <PaginationItem key={pageNum}>
                          <PaginationLink
                            href={`/Genre/${genreId}?page=${pageNum}`}
                            isActive={page === pageNum}
                          >
                            {pageNum}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    }
                  )}

                  {page < moviesData.total_pages && (
                    <PaginationItem>
                      <PaginationNext
                        href={`/Genre/${genreId}?page=${page + 1}`}
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            </div> */
}
