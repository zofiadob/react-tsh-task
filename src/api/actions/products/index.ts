import { AxiosResponse } from 'axios';

import axiosClient from 'api/axios';
import { GetProductsResult, getRequestProps } from 'api/types/productsTypes';

export const getProducts = async (queries: getRequestProps): Promise<GetProductsResult> => {
  try {
    const queryString = Object.entries(queries)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');

    const url = queryString === '' ? '/products' : `/products?${queryString}`;

    const response: AxiosResponse<GetProductsResult> = await axiosClient.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};
