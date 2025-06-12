import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { TextInput, TouchableHighlight, View } from "react-native";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.filterContainer}>
        <TextInput
          placeholderTextColor={colors["gray-400"]}
          style={styles.foodFilterInput}
          placeholder="Busque por uma comida"
        />
        <TouchableHighlight style={styles.foodFilterOptions}>
          <Ionicons
            name="filter-outline"
            size={16}
            color={colors["gray-400"]}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}
