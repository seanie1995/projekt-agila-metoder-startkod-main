'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;

  const CreatePageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set('page', pageNumber.toString());

    return `${pathName}?${params.toString()}`;
  };

  const pageSelect: number[] = [currentPage - 1, currentPage, currentPage + 1];

  return (
    <div className="flex gap-4 p-4 justify-between">
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <div className="flex gap-4">
        <Link
          href={CreatePageUrl(currentPage - 1)}
          className={`border border-neutral-400 rounded-lg px-2 hover:bg-purple-700 transition-all ${currentPage === 1 ? 'pointer-events-none text-gray-400 cursor-not-allowed' : ''}`}
        >
          Previous
        </Link>
        {pageSelect.map((i) => (
          <Link
            key={i}
            href={CreatePageUrl(i)}
            className={`border border-neutral-400 hover px-2 rounded-lg ${i === currentPage ? 'pointer-events-none bg-purple-400' : ''}`}
          >
            {i}
          </Link>
        ))}
        <Link
          href={CreatePageUrl(currentPage + 1)}
          className={`border border-neutral-400 rounded-lg px-2 hover:bg-purple-700 transition-all ${currentPage === totalPages ? 'pointer-events-none text-gray-400 cursor-not-allowed' : ''}`}
        >
          {' '}
          Next
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
