import { paginationProps } from "../types/pagination";

export default function Pagination({
  prevPage,
  nextPage,
  currentPage,
  totalPages,
}: paginationProps) {
  return (
    <div className="pagination-container">
      <button onClick={prevPage} disabled={currentPage === 1}>
        Prev
      </button>
      <span>{currentPage}</span>
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}
