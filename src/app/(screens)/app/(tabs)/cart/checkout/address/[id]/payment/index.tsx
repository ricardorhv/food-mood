import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Payment() {
  const { id } = useLocalSearchParams();
  console.log(id);

  return (
    <View>
      <Text>Pagamento</Text>
    </View>
  );
}
