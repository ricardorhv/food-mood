import { colors } from "@/styles/colors";
import { ProductCart } from "@/types/product";
import { formatPrice } from "@/utils/format-price";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function ProductCard({
  id,
  image,
  name,
  price,
  quantity,
  categoryName,
}: ProductCart) {
  const [productQuantity, setProductQuantity] = useState(quantity);

  const subtotal = productQuantity * price;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />

      <View style={styles.infoContainer}>
        <View style={styles.header}>
          <View style={styles.titleAndSubtitle}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{categoryName}</Text>
          </View>

          <Pressable style={styles.removeBtn}>
            <Ionicons name="trash-outline" size={20} color={colors.primary} />
          </Pressable>
        </View>

        <Text style={styles.price}>{formatPrice(price)}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityBtn}>
            <Ionicons size={20} color={colors.white} name="remove-outline" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{productQuantity}</Text>
          <TouchableOpacity style={styles.quantityBtn}>
            <Ionicons size={20} color={colors.white} name="add-outline" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
