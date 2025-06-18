import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, SafeAreaView, Text, View } from "react-native";
import { PaymentItem } from "./components/payment-item";
import { styles } from "./styles";

const data = [
  {
    id: "1",
    name: "CREDIT_CARD",
  },
  {
    id: "2",
    name: "DEBIT_CARD",
  },
  {
    id: "3",
    name: "IN_CASH",
  },
  {
    id: "4",
    name: "PIX",
  },
] as const;

export default function Payment() {
  const [paymentSelected, setPaymentSelected] = useState<string>("1");
  const { id: addressId } = useLocalSearchParams();
  const router = useRouter();

  function handleSelectPayment(paymentId: string) {
    setPaymentSelected(paymentId);
  }

  function finishOrder() {
    router.dismissTo(
      `/(screens)/app/(tabs)/cart/checkout/address/${addressId}/payment/order-placed`
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) => (
            <PaymentItem
              isSelected={paymentSelected === item.id}
              onSelect={handleSelectPayment}
              id={item.id}
              name={item.name}
            />
          )}
        />

        <Pressable onPress={finishOrder} style={styles.finishOrderBtn}>
          <Text style={styles.finishOrderText}>Finalizar pedido</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
