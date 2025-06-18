import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { PaymentItem } from "./components/payment-item";
import { styles } from "./styles";

export default function Payment() {
  const [paymentSelected, setPaymentSelected] = useState<string>("");
  const { id: addressId } = useLocalSearchParams();

  function handleSelectPayment() {}

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <PaymentItem name="CREDIT_CARD" />
        <PaymentItem name="CREDIT_CARD" />
        <PaymentItem name="CREDIT_CARD" />
        <PaymentItem name="CREDIT_CARD" />
      </View>
    </SafeAreaView>
  );
}
