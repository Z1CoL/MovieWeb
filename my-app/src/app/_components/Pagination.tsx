import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Pagination() {
  return (
    <div className="flex w-[1450px] justify-end">
      <Pagination>
        <PaginationContent>
          {/* Previous */}
          {page > 1 && (
            <PaginationItem>
              <PaginationPrevious href={`/page=${page - 1}`} />
            </PaginationItem>
          )}

          {/* Page Numbers */}
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const pageNum = i + 1;
            return (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  href={`/Popular?page=${pageNum}`}
                  isActive={page === pageNum}
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {/* Next page */}
          {page < moviesResults.total_pages && (
            <PaginationItem>
              <PaginationNext href={`/Popular?page=${page + 1}`} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
