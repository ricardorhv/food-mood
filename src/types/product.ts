export interface Product {
  id: string;
  description: string;
  price: number;
  name: string;
  image: string;
  preparationTime: number;
  createdAt: Date;
  categoryId: string;
  category: {
    name: string;
  };
}

export interface ProductCart
  extends Pick<Product, "id" | "name" | "price" | "image"> {
  categoryName: string;
  quantity: number;
}
