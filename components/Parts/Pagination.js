import React, { useState } from "react";

const ProductsPagination = ({ products }) => {
  // Set the items per page and current page state
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Get the current items to display
  const currentItems = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div>
      {/* Display Paginated Items */}
      <div className="product-list">
        {currentItems.map((product, index) => (
          <div key={index} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="pagination-controls">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductsPagination;