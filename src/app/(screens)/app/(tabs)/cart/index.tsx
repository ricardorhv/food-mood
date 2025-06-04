import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Cart() {
  return (
    <View style={styles.container}>
      <Text style={styles.emptyCartText}>
        Você não possui nenhum item no carrinho
      </Text>
    </View>
  );
}
