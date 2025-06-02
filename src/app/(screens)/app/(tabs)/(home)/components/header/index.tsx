import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { Text, TextInput, TouchableHighlight, View } from "react-native";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.address}>
        <View style={styles.pickerAddressContainer}>
          <Ionicons size={18} style={styles.locationIcon} name="location" />
          {/* <Picker style={styles.addressPicker}>
            <Picker.Item style={styles.addressPickerItem} label="Casa" />
            <Picker.Item label="Trabalho" />
            <Picker.Item label="Vó" />
          </Picker> */}
        </View>

        <Text style={styles.addressInfo}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
        </Text>
      </View>

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
