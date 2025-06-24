import { UserAddress } from "@/types/address";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export function AddressItem({
  city,
  id,
  name,
  neighborhood,
  houseNumber,
  state,
  street,
}: UserAddress) {
  const router = useRouter();

  const formattedAddress = `${street}, ${neighborhood}, ${houseNumber}, ${city} - ${state}`;

  function navigateToPaymentScreen() {
    router.push({
      pathname: "/app/cart/checkout/address/[id]/payment",
      params: {
        id,
      },
    });
  }

  return (
    <Pressable onPress={navigateToPaymentScreen} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.addressName}>{name}</Text>
      </View>
      <Text style={styles.addressDescription}>{formattedAddress}</Text>
    </Pressable>
  );
}
