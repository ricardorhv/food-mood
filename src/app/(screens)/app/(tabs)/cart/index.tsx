import { useCartContext } from "@/context/cart-context";
import { FlatList, Pressable, Text, View } from "react-native";
import { ItemSeparator } from "./components/item-separator";
import { ProductCard } from "./components/product-card";
import { styles } from "./styles";

export default function Cart() {
  const { productsCart } = useCartContext();
  const isEmptyCart = productsCart.length === 0;

  return (
    <View style={styles.container}>
      {isEmptyCart ? (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>
            Você não possui nenhum item no carrinho
          </Text>
        </View>
      ) : (
        <>
          <View style={styles.productListContainer}>
            <FlatList
              data={productsCart}
              keyExtractor={(item) => item.id}
              // contentContainerStyle={{ gap: 20, flex: 1 }}
              ItemSeparatorComponent={ItemSeparator}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <ProductCard
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  categoryName={item.categoryName}
                  image={item.image}
                  quantity={item.quantity}
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
          </View>
        </>
      )}
    </View>
  );
}
