import { AxiosResponse } from 'axios';

import axiosClient from 'api/axios';
import { GetProductsResult } from 'api/types/productsTypes';

export const getProducts = async (): Promise<GetProductsResult> => {
  try {
    const response: AxiosResponse<GetProductsResult> = await axiosClient.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch products');
  }
};
