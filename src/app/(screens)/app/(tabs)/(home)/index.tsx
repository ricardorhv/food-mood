import { LoadingIndicator } from "@/app/components/loading-indicator";
import { getProducts } from "@/services/product/product-service";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Header } from "./components/header";
import { ProductCard } from "./components/product-card";
import { styles } from "./styles";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const isProductsEmpty = products.length === 0;

  useEffect(() => {
    async function handleGetProducts() {
      const productList = (await getProducts()).data;
      setProducts(productList ?? []);
    }
    handleGetProducts();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.wrapper}>
        {!isProductsEmpty ? (
          <FlatList
            data={products}
            contentContainerStyle={styles.productListContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({
              item: {
                id,
                image,
                category: { name: categoryName },
                name,
                preparationTime,
                price,
              },
            }) => (
              <ProductCard
                id={id}
                name={name}
                categoryName={categoryName}
                price={price}
                preparationTime={preparationTime}
                imageUrl={image}
              />
            )}
            keyExtractor={(product) => product.id}
          />
        ) : (
          <LoadingIndicator size="large" />
        )}
      </View>
    </View>
  );
}
