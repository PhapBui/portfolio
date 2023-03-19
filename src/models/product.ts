export interface CategoryDetails {
  categoryId?: number | string;
  name?: string;
  url?: string;
  productQty: number;
  thumbnailUrl?: string;
  description?: string;
}
export interface ProductDetails {
  id: number | string;
  name: string;
  thumbnailUrl: string;
  price: number;
  quantity: number;

  discount: number | 0;
  currentPrice: number;
  slug?: string;
  category?: CategoryDetails;
  description?: string | 'Chua co mo ta';
  createdAt?: string | number;
  updatedAt?: string | number;
}
