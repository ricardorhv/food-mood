import { ProductCart } from "@/types/product";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert } from "react-native";

interface CartContextProps {
  productsCart: ProductCart[];
  changeProductQuantity: (id: string, quantity: number) => void;
  addProductToCart: (product: Omit<ProductCart, "quantity">) => void;
  removeProductFromCart: (id: string) => void;
  getProductCart: (id: string) => ProductCart;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [productsCart, setProductsCart] = useState<ProductCart[]>([]);

  async function getProductsCart(): Promise<ProductCart[]> {
    const productsCart = await AsyncStorage.getItem("productsCart");
    return productsCart ? JSON.parse(productsCart) : [];
  }

  async function updateCartStorage(products: ProductCart[]) {
    await AsyncStorage.setItem("productsCart", JSON.stringify(products));
  }

  useEffect(() => {
    (async function () {
      const productsFromStorage = await getProductsCart();
      console.log("Buscando produtos");

      setProductsCart(productsFromStorage);
    })();
  }, []);

  function getProductCart(id: string) {
    return productsCart.find((product) => product.id === id)!;
  }

  function changeProductQuantity(id: string, quantity: number) {
    if (quantity === 0) return;

    const changedProducts = productsCart.map((product) => {
      if (product.id === id)
        return {
          ...product,
          quantity,
        };

      return product;
    });

    setProductsCart(changedProducts);
    updateCartStorage(changedProducts);
  }

  function addProductToCart(product: Omit<ProductCart, "quantity">) {
    const existsProductOnCart = productsCart.find(
      ({ id }) => id === product.id
    );

    if (existsProductOnCart) {
      changeProductQuantity(product.id, existsProductOnCart.quantity + 1);
      Alert.alert("Aviso", "Item já está no carrinho, quantidade aumentada!");
      return;
    }

    const newProductCart = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,

      quantity: 1,
      categoryName: product.categoryName,
    };

    Alert.alert("Aviso", "Item adicionado com sucesso!");
    setProductsCart((prevState) => [...prevState, newProductCart]);
    updateCartStorage([...productsCart, newProductCart]);
  }

  function removeProductFromCart(id: string) {
    const productsCartWithoutRemoveOne = productsCart.filter(
      (product) => product.id !== id
    );

    setProductsCart(productsCartWithoutRemoveOne);
    updateCartStorage(productsCartWithoutRemoveOne);
  }

  return (
    <CartContext.Provider
      value={{
        productsCart,
        addProductToCart,
        changeProductQuantity,
        removeProductFromCart,
        getProductCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
