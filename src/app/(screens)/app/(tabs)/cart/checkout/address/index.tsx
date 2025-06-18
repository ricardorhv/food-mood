import { getAddresses } from "@/services/address/address-service";
import { colors } from "@/styles/colors";
import { UserAddress } from "@/types/address";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View } from "react-native";
import { AddressItem } from "../components/address-item";
import { EmptyUserAddress } from "../components/EmptyUserAddress";
import { styles } from "./styles";

export default function Address() {
  const [addresses, setAddresses] = useState<UserAddress[]>([]);

  useEffect(() => {
    (async function () {
      const { data, success } = await getAddresses();

      if (success) {
        setAddresses(data);
      }
    })();
  }, []);

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

        <TouchableOpacity style={styles.addAddressBtn}>
          <Ionicons name="add-outline" size={25} color={colors.white} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
