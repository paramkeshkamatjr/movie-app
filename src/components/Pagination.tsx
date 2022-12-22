import { paginationProps } from "../types/pagination";

export default function Pagination({
  prevPage,
  nextPage,
  currentPage,
  totalPages,
}: paginationProps) {
  return (
    <div className="pagination-container">
      <button onClick={prevPage}>Prev</button>
      <span>{currentPage}</span>
      <button onClick={nextPage}>Next</button>
    </div>
  );
}
