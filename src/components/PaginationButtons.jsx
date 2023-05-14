import React from 'react';

export default function PaginationButtons({ totalPages, currentPage, onPageChange, pageSizeOptions, onPageSizeChange }) {
  return (
    <div className='width'>
      <div className='pagination'>
        <div>
          Page Size:
          {pageSizeOptions.map((size) => (
            <button key={size} onClick={() => onPageSizeChange(size)}>
              {size}
            </button>
          ))}
        </div>
        {Array.from({ length: totalPages }).map((_, i) => (
          <a href="!#"
            key={i}
            className={currentPage === i + 1 ? 'active' : ''}
            onClick={() => onPageChange(i + 1)}
            disabled={currentPage === i + 1}
          >
            {i + 1}
          </a>
        ))}
        <div>
          <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}