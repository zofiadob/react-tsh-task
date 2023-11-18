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

export interface getRequestProps {
  search?: string;
  limit?: number;
  page?: number;
  promo?: boolean | null;
  active?: boolean | null;
}

export interface GetProductsResult {
  items: Product[];
  meta: MetaData;
}
