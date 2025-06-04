import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        // headerShown: false,
        tabBarActiveTintColor: colors.orange,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="(home)/index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart/index"
        options={{
          title: "Carrinho",
          headerTitleStyle: {
            color: colors.orange,
          },
          headerTransparent: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Meus dados",
          headerTitleStyle: {
            color: colors.orange,
          },
          headerTransparent: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
          headerRight: () => {
            return (
              <Link
                style={{
                  fontSize: 14,
                  marginRight: 24,
                  color: colors["red-light"],
                }}
                href="/"
              >
                Sair
              </Link>
            );
          },
        }}
      />
    </Tabs>
  );
}
