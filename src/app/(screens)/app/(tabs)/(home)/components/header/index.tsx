import { useProductContext } from "@/context/product-context";
import { colors } from "@/styles/colors";
import { TextInput, View } from "react-native";
import { styles } from "./styles";

export function Header() {
  const { filterProductsByName } = useProductContext();

  return (
    <View style={styles.header}>
      <View style={styles.filterContainer}>
        <TextInput
          placeholderTextColor={colors["gray-600"]}
          style={styles.foodFilterInput}
          placeholder="Busque por uma comida"
          onChangeText={filterProductsByName}
        />
      </View>
    </View>
  );
}
