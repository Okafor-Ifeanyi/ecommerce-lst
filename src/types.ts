export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    images: string[];
  }

  export interface ProductResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  }