import { Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyProductList() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nenhum produto foi encontrado</Text>
    </View>
  );
}
