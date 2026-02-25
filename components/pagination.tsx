"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const CreatePageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", pageNumber.toString());

    return `${pathName}?${params.toString()}`;
  };

  return (
    <div className="flex justify-center gap-4 p-4 ">
      {currentPage > 1 && (
        <>
          <Link href={CreatePageUrl(1)}>First</Link>
          <Link href={CreatePageUrl(currentPage - 1)}>&larr; Previous</Link>
        </>
      )}
      {currentPage < totalPages && (
        <>
          <Link href={CreatePageUrl(currentPage + 1)}>Next &rarr;</Link>
          <Link href={CreatePageUrl(totalPages)}>Last</Link>
        </>
      )}
    </div>
  );
};

export default Pagination;
