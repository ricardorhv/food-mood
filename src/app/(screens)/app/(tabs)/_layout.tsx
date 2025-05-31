import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="cart/index"
        options={{
          title: "Carrinho",
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
