import { CartContextProvider } from "@/context/cart-context";
import { ProductContextProvider } from "@/context/product-context";
import { Stack } from "expo-router";

export default function AppLayout() {
  return (
    <CartContextProvider>
      <ProductContextProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="order-placed/index"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </ProductContextProvider>
    </CartContextProvider>
  );
}
