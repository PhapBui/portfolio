import { ProductDetails } from 'models/product';
import { currency, TotalCart } from 'utils/currency';

interface MailContent<T> {
  userName: string;
  data: T[];
}

export function renderCheckoutMailContent({ userName, data }: MailContent<ProductDetails>): string {
  let content = `
        <h2>Hello, ${userName}</h2>
        <h3>Thanks you for placing your order with my store</h3>
        <p>This email is to confirm recent order</p>
        <table style="width:100%; border: 1px solid black;
  border-collapse: collapse;">
          <tr>
            <th style="text-align:left; border: 1px solid black;
  border-collapse: collapse;">${'Product Name'}</th>
            <th style="text-align:left; border: 1px solid black;
  border-collapse: collapse;">${'Product Price'}</th>
            <th style="text-align:left; border: 1px solid black;
  border-collapse: collapse;">${'Sub Total'}</th>
          </tr>

          ${data.map(
            (product) =>
              `<tr>
              <td style="text-align:left; border: 1px solid black;
  border-collapse: collapse;">${product.name}x${product.quantity}</td>
              <td style="text-align:left; border: 1px solid black;
  border-collapse: collapse;">${currency(+product.currentPrice)}</td>
              <td style="text-align:left; border: 1px solid black;
  border-collapse: collapse;">${currency(+product.currentPrice * product.quantity)}</td>
            </tr>`
          )}

            <tr>
              <td style="text-align:left; border: 1px solid black;
  border-collapse: collapse;" colspan="2">Total</td>
              
              <td style="text-align:left; border: 1px solid black;
  border-collapse: collapse;">${TotalCart(data)}</td>
            </tr>
        </table>
        <p>Thanks for your order</p>
    `;

  return content;
}
