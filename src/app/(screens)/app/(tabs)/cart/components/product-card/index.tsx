import { useCartContext } from "@/context/cart-context";
import { colors } from "@/styles/colors";
import { ProductCart } from "@/types/product";
import { formatPrice } from "@/utils/format-price";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  GestureResponderEvent,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

export function ProductCard({
  id,
  image,
  name,
  price,
  categoryName,
}: ProductCart) {
  const { changeProductQuantity, removeProductFromCart, getProductCart } =
    useCartContext();
  const router = useRouter();

  const { quantity: productQuantity } = getProductCart(id);

  const subtotal = productQuantity * price;

  function handleIncreaseQuantity(event: GestureResponderEvent) {
    event.stopPropagation();

    const changedQuantity = productQuantity + 1;

    changeProductQuantity(id, changedQuantity);
  }

  function handleDecreaseQuantity(event: GestureResponderEvent) {
    event.stopPropagation();
    const changedQuantity = productQuantity - 1;

    changeProductQuantity(id, changedQuantity);
  }

  function handleRemoveProductsFromCart(event: GestureResponderEvent) {
    event.stopPropagation();
    removeProductFromCart(id);
  }

  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/app/product/[id]",
          params: {
            id,
          },
        })
      }
      style={styles.container}
    >
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

          <Pressable
            onPress={handleRemoveProductsFromCart}
            style={styles.removeBtn}
          >
            <Ionicons name="trash-outline" size={20} color={colors.primary} />
          </Pressable>
        </View>

        <Text style={styles.price}>{formatPrice(subtotal)}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={handleDecreaseQuantity}>
            <Ionicons size={30} color={colors.white} name="remove-outline" />
          </TouchableOpacity>

          <Text style={styles.quantityText}>{productQuantity}</Text>

          <TouchableOpacity onPress={handleIncreaseQuantity}>
            <Ionicons size={30} color={colors.white} name="add-outline" />
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
}
