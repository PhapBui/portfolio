import { ListResponse } from 'models/common';
import { CategoryDetails, ProductDetails } from 'models/product';
import axiosClient from './axiosClient';

const categoryApi = {
  getAllCategory(): Promise<ListResponse<CategoryDetails>> {
    const url = '/categories?sortBy=createdAt&order=desc';
    return axiosClient.get(url);
  },

  getCategoryById(id: string): Promise<any> {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },

  addCategory(data: ProductDetails): Promise<ProductDetails> {
    const url = '/categories';
    return axiosClient.post(url, data);
  },

  updateCategory(data: Partial<ProductDetails>): Promise<ProductDetails> {
    console.log('update data: ', data);

    const url = `/categories/${data.id}`;
    return axiosClient.put(url, data);
  },

  removeCategory(id: number | string): Promise<any> {
    const url = `/categories/${id}`;
    return axiosClient.delete(url);
  },
};

export default categoryApi;
