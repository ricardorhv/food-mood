import { colors } from "@/styles/colors";
import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        title: "Carrinho",
        headerTintColor: colors.orange,
      }}
    >
      <Stack.Screen />
    </Stack>
  );
}
