import { useAddressContext } from "@/context/address-context";
import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View } from "react-native";
import { AddNewAddressModal } from "../components/add-new-address-modal";
import { AddressItem } from "../components/address-item";
import { EmptyUserAddress } from "../components/EmptyUserAddress";
import { styles } from "./styles";

export default function Address() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { addresses } = useAddressContext();

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{
            gap: 20,
          }}
          data={addresses}
          ListEmptyComponent={<EmptyUserAddress />}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <AddressItem
              id={item.id}
              name={item.name}
              city={item.city}
              houseNumber={item.houseNumber}
              neighborhood={item.neighborhood}
              state={item.state}
              street={item.street}
            />
          )}
        />

        <TouchableOpacity
          onPress={handleOpenModal}
          style={styles.addAddressBtn}
        >
          <Ionicons name="add-outline" size={25} color={colors.white} />
        </TouchableOpacity>

        <AddNewAddressModal open={isOpenModal} closeModal={handleCloseModal} />
      </View>
    </SafeAreaView>
  );
}
