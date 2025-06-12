import { colors } from "@/styles/colors";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="sign-in/index"
        options={{
          title: "Acesse sua conta",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: colors.primary,
            fontFamily: "Poppins_500Medium",
          },
          headerTransparent: true,
          headerTintColor: colors.primary,
        }}
      />
      <Stack.Screen
        name="sign-up/index"
        options={{
          title: "Crie uma conta",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: colors.primary,
            fontFamily: "Poppins_500Medium",
          },
          headerTransparent: true,
          headerTintColor: colors.primary,
        }}
      />
    </Stack>
  );
}
