"use client";

import { useTokenList } from "@/contexts/TokenListContext";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function TokenListPagination() {
  const { currentPage, totalPages, setCurrentPage } = useTokenList();

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(Math.max(currentPage - 1, 1));
            }}
          />
        </PaginationItem>
        <span>
          Page {currentPage} of {totalPages}{" "}
        </span>
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(Math.min(currentPage + 1, totalPages));
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
