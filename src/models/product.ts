export interface CategoryDetails {
  id: number | string;
  name: string;
  url: string;
  thumbnailUrl: string;
  description: string;
}
export interface ProductDetails {
  id: number | string;
  createdAt: string | number;
  name: string;
  url: string;
  thumbnailUrl: string;
  price: number;
  quanlity: number;
  categoryId: string | number;
  description: string | 'Chua co mo ta';
}
