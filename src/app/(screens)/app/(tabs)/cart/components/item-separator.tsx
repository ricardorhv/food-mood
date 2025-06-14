import { colors } from "@/styles/colors";
import { View } from "react-native";

export function ItemSeparator() {
  return (
    <View
      style={{
        width: "100%",
        height: 1,

        marginVertical: 24,

        backgroundColor: colors.white,
      }}
    />
  );
}
