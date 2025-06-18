import { useAuth } from "@/hooks/useAuth";
import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { Pressable, Text } from "react-native";

export default function TabsLayout() {
  const { signOut } = useAuth();
  const router = useRouter();

  function handleSignOut() {
    signOut();
    router.dismissTo("/");
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors["gray-700"],
        },
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
        name="cart"
        options={{
          headerShown: false,
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
            color: colors.primary,
            fontFamily: "Poppins_600Semibold",
            fontSize: 22,
          },
          headerTransparent: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
          headerRight: () => {
            return (
              <Pressable onPress={handleSignOut}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Poppins_400Regular",
                    marginRight: 24,
                    color: colors["red-light"],
                  }}
                >
                  Sair
                </Text>
              </Pressable>
            );
          },
        }}
      />
    </Tabs>
  );
}
