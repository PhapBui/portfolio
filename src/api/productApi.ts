import { ListParams, ListResponse } from 'models/common';
import { ProductDetails } from 'models/product';
import axiosClient from './axiosClient';

const productApi = {
  getAll(): Promise<ListResponse<ProductDetails[]>> {
    const url = '/products';
    return axiosClient.get(url);
  },

  searchProductByName(name: string): Promise<ListResponse<ProductDetails[]>> {
    const url = `/products?name=${name}`;
    return axiosClient.get(url);
  },

  getGroupProduct(params: ListParams): Promise<ListResponse<ProductDetails[]>> {
    const url = '/products';
    return axiosClient.get(url, { params });
  },
  getById(id: string | number): Promise<ProductDetails> {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  add(data: ProductDetails): Promise<ProductDetails> {
    console.log(data);

    const url = '/products';
    return axiosClient.post(url, data);
  },

  update(data: Partial<ProductDetails>): Promise<ProductDetails> {
    console.log('update data: ', data);

    const url = `/products/${data.id}`;
    return axiosClient.put(url, data);
  },

  remove(id: number | string): Promise<any> {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
