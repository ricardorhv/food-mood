import { FlatList, Pressable, Text, View } from "react-native";
import { ItemSeparator } from "./components/item-separator";
import { ProductCard } from "./components/product-card";
import { styles } from "./styles";

const data = [
  {
    id: "1",
    name: "Pizza de calabresa",
    price: 100,
    image: "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg",
    categoryName: "Pizza",
    quantity: 1,
    subtotal: 100,
  },
  {
    id: "1",
    name: "Pizza de calabresa",
    price: 100,
    image: "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg",
    categoryName: "Pizza",
    quantity: 1,
    subtotal: 100,
  },
];

export default function Cart() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.emptyCartContainer}>
        <Text style={styles.emptyCartText}>
          Você não possui nenhum item no carrinho
        </Text>
      </View> */}

      <View style={styles.productListContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          // contentContainerStyle={{ gap: 20 }}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => (
            <ProductCard
              id={item.id}
              name={item.name}
              price={item.price}
              categoryName={item.categoryName}
              image={item.image}
              quantity={item.quantity}
              subtotal={item.subtotal}
            />
          )}
        />
      </View>

      <View style={styles.cartSummary}>
        <View style={styles.rowContainer}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.valueText}>R$ 100,00</Text>
        </View>
        <Pressable style={styles.completeOrderBtn}>
          <Text style={styles.completeOrderText}>Finalizar pedido</Text>
        </Pressable>
        //{" "}
      </View>
    </View>
  );
}
