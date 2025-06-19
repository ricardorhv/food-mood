import { AddressContextProvider } from "@/context/address-context";
import { colors } from "@/styles/colors";
import { Stack } from "expo-router";

export default function CartLayout() {
  return (
    <AddressContextProvider>
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
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTitleAlign: "center",
            headerTintColor: colors.primary,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="checkout/address/[id]/payment/index"
          options={{
            title: "Pagamento",
            headerTitleStyle: {
              color: colors.primary,
              fontFamily: "Poppins_600Semibold",
              fontSize: 22,
            },
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTitleAlign: "center",
            headerTintColor: colors.primary,
            headerTransparent: true,
          }}
        />
      </Stack>
    </AddressContextProvider>
  );
}
