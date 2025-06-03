import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export default function Product() {
  const { id } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "",
          headerTitleStyle: {
            color: colors.orange,
          },
          headerTransparent: true,
          headerTintColor: colors.orange,
        }}
      />
      <View style={styles.container}>
        <View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.image}
          />
          <View style={styles.overlay}></View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.header}>
            <Text style={styles.name}>Nome</Text>
            <Text style={styles.description}>Descrição</Text>
          </View>

          <View style={styles.wrapper}>
            <Text style={styles.category}>Categoria</Text>

            <View style={styles.preparionTimeContainer}>
              <Ionicons
                name="time-outline"
                size={16}
                color={colors["gray-900"]}
              />
              <Text style={styles.preparionTimeText}>15min</Text>
            </View>
          </View>

          <Text style={styles.price}>R$ 10,00</Text>
        </View>
      </View>
    </>
  );
}
