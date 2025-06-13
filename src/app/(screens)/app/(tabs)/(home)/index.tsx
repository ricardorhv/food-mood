import { LoadingIndicator } from "@/app/components/loading-indicator";
import { useProductContext } from "@/context/product-context";
import { FlatList, View } from "react-native";
import { EmptyProductList } from "./components/empty-product-list";
import { Header } from "./components/header";
import { ProductCard } from "./components/product-card";
import { styles } from "./styles";

export default function Home() {
  const { products, filteredProducts, isFilteringByName } = useProductContext();
  const isProductsEmpty = products.length === 0;

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.wrapper}>
        {!isProductsEmpty ? (
          <FlatList
            data={isFilteringByName ? filteredProducts : products}
            contentContainerStyle={styles.productListContainer}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={EmptyProductList}
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
