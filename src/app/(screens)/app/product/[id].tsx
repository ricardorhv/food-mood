import { LoadingIndicator } from "@/app/components/loading-indicator";
import { useCartContext } from "@/context/cart-context";
import { getProductById } from "@/services/product/product-service";
import { colors } from "@/styles/colors";
import { Product } from "@/types/product";
import { formatPreparationTime } from "@/utils/format-preparation-time";
import { formatPrice } from "@/utils/format-price";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function ProductDetails() {
  const { id } = useLocalSearchParams<Record<"id", string>>();
  const [product, setProduct] = useState<Product | null>(null);
  const { addProductToCart } = useCartContext();

  function handleAddProductToCart() {
    if (product) {
      addProductToCart({
        id,
        name: product.name,
        image: product.image,
        price: product.price,
        categoryName: product.category.name,
      });
    }
  }

  useEffect(() => {
    (async function () {
      const { data } = await getProductById(id);
      setProduct(data!);
    })();
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "",
          headerTitleStyle: {
            color: colors.primary,
          },
          headerTransparent: true,
          headerTintColor: colors.primary,
          headerBackButtonDisplayMode: "minimal",
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
                  color={colors["gray-200"]}
                />
                <Text style={styles.preparionTimeText}>
                  {formatPreparationTime(product.preparationTime!)}
                </Text>
              </View>
            </View>

            <Text style={styles.price}>{formatPrice(product.price)}</Text>

            <TouchableOpacity
              onPress={handleAddProductToCart}
              style={styles.addToCartBtn}
            >
              <Ionicons
                name="cart-outline"
                size={25}
                color={colors.secondary}
              />
              <Text style={styles.addToCartBtnText}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <LoadingIndicator size="large" />
      )}
    </>
  );
}
