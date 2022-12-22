export type paginationProps = {
  prevPage: () => void;
  nextPage: () => void;
  currentPage: number;
  totalPages: number;
};
