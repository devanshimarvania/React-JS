function Pagination({ totalPages, currentPage, setCurrentPage }) {
  return (
    <div className="d-flex justify-content-center mt-4">
      <button
        className="btn btn-outline-secondary me-2"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>

      <span className="align-self-center">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="btn btn-outline-secondary ms-2"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;