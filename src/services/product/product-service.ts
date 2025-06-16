import { api } from "@/lib/axios";
import { Product } from "@/types/product";

export async function getProducts() {
  try {
    const { data } = await api.get<Product[]>("/product");

    return {
      data,
    };
  } catch {
    return {
      errors: `Erro ao buscar dados dos produtos`,
    };
  }
}

export async function getProductById(productId: string) {
  try {
    const { data } = await api.get<Product>(`/product/${productId}`);

    return {
      data,
    };
  } catch {
    return {
      data: null,
      errors: `Erro ao buscar dados do produto`,
    };
  }
}
