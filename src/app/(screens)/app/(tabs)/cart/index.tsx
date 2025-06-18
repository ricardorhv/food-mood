import { useCartContext } from "@/context/cart-context";
import { formatPrice } from "@/utils/format-price";
import { useRouter } from "expo-router";
import { FlatList, Pressable, SafeAreaView, Text, View } from "react-native";
import { ItemSeparator } from "./components/item-separator";
import { ProductCard } from "./components/product-card";
import { styles } from "./styles";

export default function Cart() {
  const { productsCart, SHIPPING_RATE } = useCartContext();
  const router = useRouter();

  function navigateToCheckout() {
    router.push("/app/cart/checkout/address");
  }

  const isEmptyCart = productsCart.length === 0;
  const total =
    productsCart.reduce((acc, productCart) => {
      return acc + productCart.price * productCart.quantity;
    }, 0) + SHIPPING_RATE;

  return (
    <SafeAreaView style={styles.container}>
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
              <Text style={styles.rowText}>Frete</Text>
              <Text style={styles.valueText}>{formatPrice(SHIPPING_RATE)}</Text>
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.valueText}>{formatPrice(total)}</Text>
            </View>
            <Pressable
              onPress={navigateToCheckout}
              style={styles.completeOrderBtn}
            >
              <Text style={styles.completeOrderText}>Checkout</Text>
            </Pressable>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
