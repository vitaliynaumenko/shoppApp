import { Category, Product } from '../types/types';

class ApiError extends Error {
  constructor(status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

class ApiShop {
  private static instance: ApiShop;

  public static getInstance(): ApiShop {
    if (!ApiShop.instance) {
      ApiShop.instance = new ApiShop();
    }
    return ApiShop.instance;
  }

  private async fetchData(url: string) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new ApiError(response.status, `HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error: unknown) {
      if (error instanceof ApiError) {
        throw error;
      }
      if (error instanceof Error) {
        throw new Error(`Failed to fetch data: ${error.message}`);
      }
      throw new Error(`Failed to fetch data: Unknown error`);
    }
  }

  public async getProducts(): Promise<Product[]> {
    return await this.fetchData('https://fakestoreapi.com/products');
  }

  public async getCategories(): Promise<Category[]> {
    return await this.fetchData('https://fakestoreapi.com/products/categories');
  }
  public async getProductsByCategory(category: string): Promise<Product[]> {
    return this.fetchData(`https://fakestoreapi.com/products/category/${category}`);
  }
}
export default ApiShop;
