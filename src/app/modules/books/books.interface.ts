export type IBookFilterRequest = {
  searchTerm?: string | undefined;
  title?: string | undefined;
  author?: string | undefined;
  price?: number | undefined;
  genre?: string | undefined;
  publicationDate?: string | undefined;
  categoryId?: string | undefined;
};
