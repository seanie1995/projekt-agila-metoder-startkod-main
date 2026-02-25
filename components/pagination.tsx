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

  return (
    <div className="flex gap-4 p-4 justify-between">
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <div className="flex gap-4">
        <Link
          href={CreatePageUrl(1)}
          className={`border border-neutral-400 rounded-lg px-2 hover:bg-purple-700 transition-all ${currentPage === 1 ? 'pointer-events-none text-gray-400 cursor-not-allowed' : ''}`}
        >
          First
        </Link>
        <Link
          href={CreatePageUrl(currentPage - 1)}
          className={`border border-neutral-400 rounded-lg px-2 hover:bg-purple-700 transition-all ${currentPage === 1 ? 'pointer-events-none text-gray-400 cursor-not-allowed' : ''}`}
        >
          Previous
        </Link>

        <Link
          href={CreatePageUrl(currentPage + 1)}
          className={`border border-neutral-400 rounded-lg px-2 hover:bg-purple-700 transition-all ${currentPage === totalPages ? 'pointer-events-none text-gray-400 cursor-not-allowed' : ''}`}
        >
          {' '}
          Next
        </Link>
        <Link
          href={CreatePageUrl(totalPages)}
          className={`border border-neutral-400 rounded-lg px-2 hover:bg-purple-700 transition-all ${currentPage === totalPages ? 'pointer-events-none text-gray-400 cursor-not-allowed' : ''}`}
        >
          {' '}
          Last
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
