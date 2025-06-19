import { LoadingIndicator } from "@/app/components/loading-indicator";
import { useCartContext } from "@/context/cart-context";
import { createOrder } from "@/services/order/order-service";
import { getPayments } from "@/services/payment/payment-service";
import { PaymentMethod } from "@/types/payment";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, SafeAreaView, Text, View } from "react-native";
import { PaymentItem } from "./components/payment-item";
import { styles } from "./styles";

export default function Payment() {
  const [payments, setPayments] = useState<PaymentMethod[]>([]);
  const [paymentSelected, setPaymentSelected] = useState<string>("");
  const { id: addressId } = useLocalSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { productsCart, SHIPPING_RATE, resetCartContext } = useCartContext();

  useEffect(() => {
    (async function () {
      const { success, data } = await getPayments();

      if (success) {
        setPayments(data);
        setPaymentSelected(data[0].id);
      }
    })();
  }, []);

  function handleSelectPayment(paymentId: string) {
    setPaymentSelected(paymentId);
  }

  async function finishOrder() {
    setIsLoading(true);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          createOrder(
            paymentSelected,
            addressId as string,
            productsCart,
            SHIPPING_RATE
          )
        );
      }, 2000);
    });
    setIsLoading(false);
    resetCartContext();
    router.dismissTo(`/(screens)/app/order-placed`);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading ? (
        <LoadingIndicator size="large" />
      ) : (
        <View style={styles.container}>
          <FlatList
            data={payments}
            keyExtractor={({ id }) => id}
            contentContainerStyle={{ gap: 20 }}
            renderItem={({ item }) => (
              <PaymentItem
                isSelected={paymentSelected === item.id}
                onSelect={handleSelectPayment}
                id={item.id}
                name={item.methodPayment}
              />
            )}
          />

          <Pressable onPress={finishOrder} style={styles.finishOrderBtn}>
            <Text style={styles.finishOrderText}>Finalizar pedido</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
}
