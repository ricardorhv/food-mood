import { CartContextProvider } from "@/context/cart-context";
import { Stack } from "expo-router";
import ToastManager from "toastify-react-native";

export default function AppLayout() {
  return (
    <CartContextProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <ToastManager />
      </Stack>
    </CartContextProvider>
  );
}
