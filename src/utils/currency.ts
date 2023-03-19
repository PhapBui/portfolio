import { ProductDetails } from 'models/product';

export function currency(price: number | 0) {
  if (!price && price !== 0) return;
  return price.toLocaleString('vi-VI', { style: 'currency', currency: 'VND' });
}

export function currencyWithDiscount(price: number | 0, discount: number | 0) {
  if (!price && price !== 0) return;
  return ((price * (100 - discount)) / 100).toLocaleString('vi-VI', {
    style: 'currency',
    currency: 'VND',
  });
}

export function TotalCart(cartList: ProductDetails[]) {
  const total = cartList.reduce((a, b) => {
    a += b.currentPrice * b.quantity;
    return a;
  }, 0);
  return currency(+total);
}


