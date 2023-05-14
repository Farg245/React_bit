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
          <button  onClick={() => onPageChange(i + 1)}
            key={i}
            className={currentPage === i + 1 ? 'active' : ''}
            
            disabled={currentPage === i + 1}
          >
            {i + 1}
          </button>
        ))}
        <div>
        <button class="prev-next" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          <button class="prev-next" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}