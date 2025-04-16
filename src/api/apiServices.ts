class ApiServices {
  private static instance: ApiServices;

  private constructor() {}

  public static getInstance(): ApiServices {
    if (!ApiServices.instance) {
      ApiServices.instance = new ApiServices();
    }
    return ApiServices.instance;
  }

  public async getProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    return await response.json();
  }

  public async getCategories() {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    return await response.json();
  }
  public async getProductsByCategory(category: string) {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    return await response.json();
  }
}
export default ApiServices;
