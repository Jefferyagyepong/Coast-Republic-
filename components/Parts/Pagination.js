// Pagination.jsx
import React from 'react';

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 7,
  showFirstLast = true,
  showPrevNext = true,
}) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    // Adjust range when near edges
    if (end - start + 1 < maxVisiblePages) {
      if (start === 1) {
        end = Math.min(totalPages, start + maxVisiblePages - 1);
      } else {
        start = Math.max(1, end - maxVisiblePages + 1);
      }
    }

    const pages = [];

    // First page + ellipsis
    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push('…');
    }

    // Main visible pages
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Last page + ellipsis
    if (end < totalPages) {
      if (end < totalPages - 1) pages.push('…');
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav aria-label="Pagination" className="pagination-container">
      <ul className="pagination">
        {/* First */}
        {showFirstLast && (
          <li>
            <button
              onClick={() => onPageChange(1)}
              disabled={currentPage === 1}
              className={currentPage === 1 ? 'pagination-disabled' : ''}
              aria-label="First page"
            >
              «
            </button>
          </li>
        )}

        {/* Previous */}
        {showPrevNext && (
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={currentPage === 1 ? 'pagination-disabled' : ''}
              aria-label="Previous page"
            >
              ‹
            </button>
          </li>
        )}

        {/* Page numbers */}
        {pages.map((page, idx) =>
          typeof page === 'string' ? (
            <li key={`ellipsis-${idx}`}>
              <span className="pagination-ellipsis">{page}</span>
            </li>
          ) : (
            <li key={page}>
              <button
                onClick={() => onPageChange(page)}
                className={page === currentPage ? 'pagination-active' : ''}
                aria-current={page === currentPage ? 'page' : undefined}
                aria-label={`Go to page ${page}`}
              >
                {page}
              </button>
            </li>
          )
        )}

        {/* Next */}
        {showPrevNext && (
          <li>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={currentPage === totalPages ? 'pagination-disabled' : ''}
              aria-label="Next page"
            >
              ›
            </button>
          </li>
        )}

        {/* Last */}
        {showFirstLast && (
          <li>
            <button
              onClick={() => onPageChange(totalPages)}
              disabled={currentPage === totalPages}
              className={currentPage === totalPages ? 'pagination-disabled' : ''}
              aria-label="Last page"
            >
              »
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}