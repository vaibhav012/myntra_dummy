import PropTypes from "prop-types";

const Pagination = ({ totalPages, currentPage, onChange }) => {
  const pagesToShow = () => {
    const pages = [];
    let minPage = currentPage - 10;
    minPage = minPage < 0 ? 0 : minPage;
    while (minPage <= currentPage) {
      pages.push(minPage++);
    }
    let maxCount = currentPage + 10 - pages.length;
    maxCount = maxCount > totalPages ? totalPages : maxCount;
    let start = currentPage + 1;
    while (maxCount >= start) {
      pages.push(start++);
    }
    return pages;
  };

  const handleNext = () => {
    onChange?.(currentPage + 1);
  };

  const handlePrev = () => {
    onChange?.(currentPage - 1);
  };

  return (
    <div className="w-fit mx-auto mb-8">
      {currentPage > 0 && <button onClick={handlePrev}>Previous</button>}
      {pagesToShow()?.map((page) => (
        <button
          className={`mx-2 ${page === currentPage && "font-bold"}`}
          onClick={() => onChange?.(page)}
          key={page}
        >
          {page + 1}
        </button>
      ))}
      {currentPage < totalPages && <button onClick={handleNext}>Next</button>}
    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Pagination;
