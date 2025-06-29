import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";

export default function OrderPlaced() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.dismissTo("/(screens)/app/(tabs)/(home)");
    }, 4000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("@/assets/images/confirmation-order.png")}
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Seu pedido foi finalizado!</Text>
          <Text style={styles.subtitle}>
            Obrigado por comprar com os melhores!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
