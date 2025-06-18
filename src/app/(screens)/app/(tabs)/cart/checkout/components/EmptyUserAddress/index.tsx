import { Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyUserAddress() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Você não possui nenhum endereço cadastrado
      </Text>
    </View>
  );
}
