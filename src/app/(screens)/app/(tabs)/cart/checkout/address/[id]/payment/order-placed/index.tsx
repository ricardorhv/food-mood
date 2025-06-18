import { Image, SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";

export default function OrderPlaced() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("@/assets/images/confirmation-order.png")}
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Seu pedido foi feito!</Text>
          <Text style={styles.subtitle}>
            Obrigado por comprar com os melhores!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
