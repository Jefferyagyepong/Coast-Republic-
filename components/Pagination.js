import { useState } from 'react';
import { useRouter } from 'next/router';

const Pagination = ({ totalPages, currentPage }) => {
  const router = useRouter();

  const handlePageChange = (page) => {
    router.push(`?page=${page}`, undefined, { shallow: true });
  };
 return (
   <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
       disabled={currentPage === 1}
      >
       Previous
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={currentPage === page ? 'active' : ''}
       >
          {page}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;