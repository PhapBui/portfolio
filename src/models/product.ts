export interface CategoryDetails {
  id: number | string;
  name: string;
  url: string;
  thumbnailUrl: string;
  description: string;
}
export interface ProductDetails {
  id: number | string;
  name: string;
  url: string;

  thumbnailUrl: string;
  price: number;
  quanlity: number;
  categoryId: string | number;
  description: string | 'Chua co mo ta';
  createdAt: string | number;
  updatedAt: string | number;
}
