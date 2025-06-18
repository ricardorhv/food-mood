import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyCartText: {
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
    color: colors["gray-400"],
    textAlign: "center",

    padding: 24,
  },

  productListContainer: {
    marginTop: 50,
    width: "100%",
    flex: 1,

    padding: 24,
    gap: 20,
  },

  cartSummary: {
    backgroundColor: colors.primary,

    padding: 24,
    gap: 20,
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  rowText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,

    color: colors.white,
  },

  totalText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 16,

    color: colors.background,
  },

  valueText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,

    color: colors.background,
  },

  completeOrderBtn: {
    justifyContent: "center",
    alignItems: "center",

    padding: 8,

    backgroundColor: colors.white,
    borderRadius: 4,
  },

  completeOrderText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,

    color: colors.background,
  },
});
