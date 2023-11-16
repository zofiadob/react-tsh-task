export interface MetaData {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  rating: 1 | 2 | 3 | 4 | 5;
  image: string;
  promo: boolean;
  active: boolean;
}

export interface GetProductsResult {
  items: Product[];
  meta: MetaData;
}
