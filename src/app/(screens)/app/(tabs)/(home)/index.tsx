import { FlatList, View } from "react-native";
import { HeaderHome } from "../../components/header-home";
import { ProductCard } from "../../components/product-card";
import { styles } from "./styles";

const data = [
  {
    id: "1",
    name: "Calabresa",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Pizza",
    preparationTime: 15,
  },
  {
    id: "2",
    name: "Moda da casa",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Pizza",
    preparationTime: 15,
  },
  {
    id: "3",
    name: "Strogonoff",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Pizza",
    preparationTime: 100,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <HeaderHome />
      <FlatList
        data={data}
        contentContainerStyle={styles.productListContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({
          item: { image, category, name, preparationTime, price },
        }) => (
          <ProductCard
            name={name}
            categoryName={category}
            price={price}
            preparationTime={preparationTime}
            imageUrl={image}
          />
        )}
        keyExtractor={(product) => product.id}
      />
    </View>
  );
}
