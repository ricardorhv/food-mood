import { colors } from "@/styles/colors";
import { Stack } from "expo-router";

export default function CartLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Carrinho",
          headerTitleStyle: {
            color: colors.primary,
            fontFamily: "Poppins_600Semibold",
            fontSize: 22,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="checkout/address/index"
        options={{
          title: "Endereço",
          headerTitleStyle: {
            color: colors.primary,
            fontFamily: "Poppins_600Semibold",
            fontSize: 22,
          },
          headerTitleAlign: "center",
          headerTintColor: colors.primary,
          headerTransparent: true,
        }}
      />
    </Stack>
  );
}
