export interface ProductsResponse {
  id: number;
  image: string;
  name: string;
  category: Category;
  price: number;
  discountPercentage: number;
  isHotDeal: boolean;
  categoryType: CategoryType;
  brand: string;
  year: number;
  origin: Origin;
  priceRange: PriceRange;
}

export enum Category {
  ChevroletColoradoToyotaHilux = "Chevrolet Colorado, Toyota Hilux",
}

export enum CategoryType {
  Air = "air",
  Cabin = "cabin",
  Fuel = "fuel",
  Oil = "oil",
}

export enum Origin {
  China = "china",
  Germany = "germany",
  Japan = "japan",
}

export enum PriceRange {
  Over500K = "over-500k",
}
