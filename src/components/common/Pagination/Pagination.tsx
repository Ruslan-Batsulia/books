"use client";

import Image from "next/image";
import { useMemo } from "react";

import arrow from "@/public/images/dropdown/theme/ArrowDark.svg";

import "./Pagination.scss";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const generatePageNumbers = useMemo<(string | number)[]>(() => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, index) => index + 1);
    if (currentPage < 3) return [1, 2, 3, "...", totalPages];
    if (currentPage > totalPages - 2) return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    return [1, "...", currentPage, "...", totalPages];
  }, [totalPages, currentPage]);
  
  const handlePageChange = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className={"pagination"}>
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={
          "pagination__prev " +
          "pagination__button " +
          (currentPage === 1 ? "pagination__button--disabled " : "")
        }
      >
        <Image
          src={arrow}
          alt="Arrow Icon"
          height={13}
          className={"pagination__arrow"}
        />
      </button>

      {generatePageNumbers.map((page, i) => {
        return (
          <button
            key={i}
            onClick={() => typeof page === "number" && handlePageChange(page)}
            disabled={page === "..." || page === currentPage}
            className={
              "pagination__page " +
              "pagination__button " +
              (typeof page === "number" && page === currentPage ? "pagination__active " : "") +
              (page === "..." ? "pagination__triplet " : "")
            }
            aria-current={typeof page === "number" && page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        )
      })}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={
          "pagination__next " +
          "pagination__button " +
          (currentPage === totalPages ? "pagination__button--disabled " : "")
        }
      >
        <Image
          src={arrow}
          alt="Arrow Icon"
          height={13}
          className={"pagination__arrow"}
        />
      </button>
    </div>
  );
};
