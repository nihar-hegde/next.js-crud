"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";

export default function PaginationControls({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex justify-center">
      <Pagination>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            router.push(createPageURL(Math.max(1, currentPage - 1)))
          }
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <div className="mx-4 flex items-center">
          Page {currentPage} of {totalPages}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            router.push(createPageURL(Math.min(totalPages, currentPage + 1)))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </Pagination>
    </div>
  );
}
