import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack initialRouteName="sign-in" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="sign-in"
        options={{
          title: "Login",
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          title: "Crie uma conta",
        }}
      />
    </Stack>
  );
}
