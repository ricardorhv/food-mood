import { ProductCart } from "@/types/product";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Cart {
  productsCart: ProductCart[];
  total: number;
}

export const useCart = () => {
  async function updateProductsCart(products: ProductCart[]) {
    await AsyncStorage.setItem("productsCart", JSON.stringify(products));
  }

  async function changeProductQuantity(id: string, quantity: number) {
    const products = await getProductsCart();

    const changedProducts = products.map((product) => {
      if (product.id === id)
        return {
          ...product,
          quantity,
        };

      return product;
    });

    updateProductsCart(changedProducts);
  }

  async function addProductToCart(product: Omit<ProductCart, "quantity">) {
    const products = await getProductsCart();

    const existsProductOnCart = products.find(({ id }) => id === product.id);

    if (existsProductOnCart) {
      changeProductQuantity(product.id, existsProductOnCart.quantity++);
      return;
    }

    products.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,

      quantity: 1,
      categoryName: product.categoryName,
    });
    updateProductsCart(products);
  }

  async function removeProductFromCart(id: string) {
    const products = await getProductsCart();

    const productsWithoutTheRemoveOne = products.filter(
      (product) => product.id !== id
    );
    updateProductsCart(productsWithoutTheRemoveOne);
  }

  async function getProductsCart(): Promise<ProductCart[]> {
    const productsCart = await AsyncStorage.getItem("productsCart");
    return productsCart ? JSON.parse(productsCart) : [];
  }

  return {
    getProductsCart,
    changeProductQuantity,
    addProductToCart,
    removeProductFromCart,
  };
};
