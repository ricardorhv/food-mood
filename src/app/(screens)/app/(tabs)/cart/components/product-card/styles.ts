import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 18,
  },

  image: {
    width: 150,
    height: 150,

    borderRadius: 8,
  },

  infoContainer: {
    gap: 16,
    flex: 1,
    justifyContent: "space-between",
  },

  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 14,
  },

  titleAndSubtitle: {
    flex: 1,
  },

  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,

    lineHeight: 20,

    color: colors.primary,
  },

  subtitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,

    color: colors["gray-400"],
  },

  removeBtn: {
    flexShrink: 0,
  },

  price: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,

    lineHeight: 20,

    color: colors.white,
  },

  quantityContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 32,

    backgroundColor: colors.primary,
    borderRadius: 4,

    padding: 4,
  },

  quantityText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,

    color: colors.white,
  },
});
