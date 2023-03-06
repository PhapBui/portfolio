import { ListParams, ListResponse } from 'models/common';
import { ProductDetails } from 'models/product';
import axiosClient from './axiosClient';

const productApi = {
  getAll(params: ListParams): Promise<ListResponse<ProductDetails>> {
    const url = '/products';
    return axiosClient.get(url, { params });
  },

  getById(id: string): Promise<any> {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  add(data: ProductDetails): Promise<ProductDetails> {
    const url = '/products';
    return axiosClient.post(url, data);
  },

  update(data: Partial<ProductDetails>): Promise<ProductDetails> {
    const url = `/products/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id: string): Promise<any> {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
