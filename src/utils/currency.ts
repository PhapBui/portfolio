export function currency(x: number) {
  return x.toLocaleString('vi-VI', { style: 'currency', currency: 'VND' });
}
