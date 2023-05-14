import React, { useState } from 'react';

export default function PaginationButtons({ totalPages, currentPage, onPageChange, pageSizeOptions, onPageSizeChange }) {
  const [selectedPageSize, setSelectedPageSize] = useState(pageSizeOptions[0]);

  return (
    <div className='width'>
      <div className='pagination'>
        <div>
          Page Size:
          {pageSizeOptions.map((size) => (
            <button
              className={selectedPageSize === size ? 'active' : 'prev-next'}
              key={size}
              onClick={() => {
                setSelectedPageSize(size);
                onPageSizeChange(size);
              }}
            >
              {size}
            </button>
          ))}
        </div>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            onClick={() => onPageChange(i + 1)}
            key={i}
            className={currentPage === i + 1 ? 'active' : ''}
            disabled={currentPage === i + 1}
          >
            {i + 1}
          </button>
        ))}
        <div>
          <button
            className='prev-next'
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className='prev-next'
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
