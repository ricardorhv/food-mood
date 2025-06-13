import { getProducts } from "@/services/product/product-service";
import { Product } from "@/types/product";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ProductContextProps {
  products: Product[];
  filteredProducts: Product[];
  isFilteringByName: boolean;

  filterProductsByName: (text: string) => void;
}

interface ProductContextProviderProps {
  children: ReactNode;
}

const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);

export function ProductContextProvider({
  children,
}: ProductContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [filterText, setFilterText] = useState("");

  function filterProductsByName(text: string) {
    setFilterText(text);
  }

  const filteredProducts = products.filter(({ name }) =>
    name.toLowerCase().includes(filterText.toLowerCase())
  );

  const isFilteringByName = filterText.trim().length !== 0;

  useEffect(() => {
    async function handleGetProducts() {
      const productList = (await getProducts()).data;
      setProducts(productList ?? []);
    }
    handleGetProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        filterProductsByName,
        filteredProducts,
        isFilteringByName,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => useContext(ProductContext);
