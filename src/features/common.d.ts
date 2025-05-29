export {};

declare global {
  type RootResponse<T> = {
    value: T;
    isSuccess: boolean;
    message: string;
  };

  type Pagination<T> = {
    items: T[];
    totalItems: number;
    pageNumber: number;
    pageSize: number;
    hasNext: boolean;
  };
}
