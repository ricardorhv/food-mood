import { useCart } from "@/hooks/useCart";
import { colors } from "@/styles/colors";
import { ProductCart } from "@/types/product";
import { formatPrice } from "@/utils/format-price";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
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
  const { changeProductQuantity } = useCart();

  const subtotal = productQuantity * price;

  function increaseQuantity() {
    setProductQuantity((prevState) => prevState + 1);
  }

  function decreaseQuantity() {
    setProductQuantity((prevState) => prevState - 1);
  }

  useEffect(() => {
    changeProductQuantity(id, productQuantity);
  }, [productQuantity]);

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

        <Text style={styles.price}>{formatPrice(subtotal)}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity
            disabled={productQuantity === 1}
            onPress={decreaseQuantity}
          >
            <Ionicons size={20} color={colors.white} name="remove-outline" />
          </TouchableOpacity>

          <Text style={styles.quantityText}>{productQuantity}</Text>

          <TouchableOpacity onPress={increaseQuantity}>
            <Ionicons size={20} color={colors.white} name="add-outline" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
