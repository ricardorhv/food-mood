import { colors } from "@/styles/colors";
import { Address } from "@/types/address";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export function AddressItem({
  city,
  id,
  name,
  neighborhood,
  houseNumber,
  state,
  street,
}: Address) {
  const formattedAddress = `${street}, ${neighborhood}, ${houseNumber}, ${city} - ${state}`;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.addressName}>{name}</Text>
        <Modal animationType="slide" visible={isModalOpen}>
          Teste
        </Modal>
        <Pressable
          onPress={() => setIsModalOpen(true)}
          style={styles.settingBtn}
        >
          <Ionicons
            color={colors.primary}
            name="ellipsis-horizontal"
            size={24}
          />
        </Pressable>
      </View>

      <Text style={styles.addressDescription}>{formattedAddress}</Text>
    </View>
  );
}
