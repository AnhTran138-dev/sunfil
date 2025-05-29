export interface ProductsResponse {
  id: number;
  image?: string;
  name: string;
  category: string;
  price: number;
  discountPercentage: number;
  isHotDeal: boolean;
}
