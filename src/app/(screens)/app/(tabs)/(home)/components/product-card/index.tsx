import { colors } from "@/styles/colors";
import { formatPreparationTime } from "@/utils/format-preparation-time";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ProductCardProps {
  id: string;
  name: string;
  imageUrl: string;
  preparationTime: number;
  price: number;
  categoryName: string;
}

export function ProductCard({
  id,
  name,
  categoryName,
  imageUrl,
  preparationTime,
  price,
}: ProductCardProps) {
  const preparationTimeText = formatPreparationTime(preparationTime);

  function handleAddProductToCart() {
    console.log(`${name} adicionado no carrinho`);
  }

  return (
    <Link
      href={{
        pathname: "/app/product/[id]",
        params: {
          id,
        },
      }}
      asChild
    >
      <View style={styles.container}>
        <Image
          source={{
            uri: imageUrl,
          }}
          defaultSource={{
            uri: "https://openlab.sps.cuny.edu/omvss/wp-content/themes/koji/assets/images/default-fallback-image.png",
          }}
          style={styles.productImage}
        />

        <View style={styles.productInfoContainer}>
          <TouchableOpacity
            onPress={handleAddProductToCart}
            style={styles.addProductToMinicartBtn}
          >
            <Ionicons name="add-outline" size={25} color={colors.white} />
          </TouchableOpacity>

          <View style={styles.productDataContainer}>
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productPrice}>
              {Number(price.toFixed(2)).toLocaleString("pt-BR", {
                currency: "BRL",
                style: "currency",
              })}
            </Text>
          </View>

          <View style={styles.productDataContainer}>
            <Text style={styles.productCategory}>{categoryName}</Text>

            <View style={styles.productPreparionTimeContainer}>
              <Ionicons
                name="time-outline"
                size={16}
                color={colors["gray-200"]}
              />
              <Text style={styles.productPreparionTimeText}>
                {preparationTimeText}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Link>
  );
}
