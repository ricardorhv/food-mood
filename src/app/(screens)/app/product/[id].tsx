import { LoadingIndicator } from "@/app/components/loading-indicator";
import { getProductById } from "@/services/product/product-service";
import { colors } from "@/styles/colors";
import { Product } from "@/types/product";
import { formatPreparationTime } from "@/utils/format-preparation-time";
import { formatPrice } from "@/utils/format-price";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export default function ProductDetails() {
  const { id } = useLocalSearchParams<Record<"id", string>>();
  const [product, setProduct] = useState<Product | null>();

  useEffect(() => {
    (async function () {
      const { data } = await getProductById(id);
      setProduct(data);
    })();
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "",
          headerTitleStyle: {
            color: colors.primary,
          },
          headerTransparent: true,
          headerTintColor: colors.primary,
        }}
      />
      {product ? (
        <View style={styles.container}>
          <View>
            <Image
              source={{
                uri: product.image,
              }}
              style={styles.image}
            />
            <View style={styles.overlay}></View>
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.header}>
              <Text style={styles.name}>{product.name}</Text>
              <Text style={styles.description}>{product.description}</Text>
            </View>

            <View style={styles.wrapper}>
              <Text style={styles.category}>{product.category.name}</Text>

              <View style={styles.preparionTimeContainer}>
                <Ionicons
                  name="time-outline"
                  size={16}
                  color={colors["gray-400"]}
                />
                <Text style={styles.preparionTimeText}>
                  {formatPreparationTime(product.preparationTime!)}
                </Text>
              </View>
            </View>

            <Text style={styles.price}>{formatPrice(product.price)}</Text>
          </View>
        </View>
      ) : (
        <LoadingIndicator size="small" />
      )}
    </>
  );
}
