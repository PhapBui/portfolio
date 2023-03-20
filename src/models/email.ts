import { ProductDetails } from 'models/product';

export interface CustomerInfo {
  customer_name: string;
  email: string;
  phonenumber: string;
  address: string;
  proviceId: number | string;
  districtId: number | string;
  ward: number | string;
  note?: string;
}

export interface FormCheckout {
  note?: string;
  product: ProductDetails;
  CustomerInfo: CustomerInfo;
}
