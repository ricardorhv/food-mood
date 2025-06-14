import { Product, ProductCart } from "@/types/product";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Cart {
  productsCart: ProductCart[];
  total: number;
}

export const useCart = () => {
  async function updateProductsCart(products: ProductCart[]) {
    await AsyncStorage.setItem("productsCart", JSON.stringify(products));
  }

  async function getProductsCart(): Promise<Product[]> {
    const productsCart = await AsyncStorage.getItem("productsCart");
    return productsCart ? JSON.parse(productsCart) : [];
  }

  return {
    updateProductsCart,
    getProductsCart,
  };
};
