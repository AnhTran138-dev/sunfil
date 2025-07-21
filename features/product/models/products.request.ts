export interface ProductRequest extends Record<string, unknown> {
  pageNumber?: number;
  pageSize?: number;
  search?: string;
  isDescending?: boolean;
  filter?: FilterOption[];
  sort?: SortOption[];
}
