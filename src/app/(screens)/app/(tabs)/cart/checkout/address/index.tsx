import { FlatList, SafeAreaView, View } from "react-native";
import { AddressItem } from "../components/address-item";
import { styles } from "./styles";

const data = [
  {
    id: "1",
    name: "Home",
    city: "Assis",
    state: "Paraná",
    neighborhood: "Jardim",
    street: "Rua",
    houseNumber: "123",
  },
  {
    id: "2",
    name: "School",
    city: "Assis",
    state: "Paraná",
    neighborhood: "Jardim",
    street: "Rua",
    houseNumber: "123",
  },
];

export default function Address() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{
            gap: 20,
          }}
          data={data}
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
      </View>
    </SafeAreaView>
  );
}
