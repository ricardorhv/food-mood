import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    overflow: "hidden",
    boxShadow: "0px 0px 10px #00000015",

    width: "100%",
  },

  addProductToMinicartBtn: {
    width: 45,
    height: 45,

    borderRadius: 100,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: colors.primary,

    position: "absolute",
    alignSelf: "center",
    bottom: 70,
    zIndex: 2,

    boxShadow: "0px 0px 10px #00000020",
  },

  productImage: {
    width: "100%",
    height: 200,
  },

  productInfoContainer: {
    backgroundColor: colors["gray-700"],
    paddingVertical: 16,
    paddingHorizontal: 8,
    gap: 4,
  },

  productDataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    flex: 1,
  },

  productName: {
    fontSize: 18,
    fontFamily: "Poppins_700Bold",

    color: colors.primary,
  },

  productPrice: {
    flexShrink: 0,

    fontSize: 14,
    fontFamily: "Poppins_700Bold",

    color: colors["gray-200"],
  },

  productCategory: {
    fontSize: 12,
    fontFamily: "Poppins_300Light",

    color: colors["gray-200"],
  },

  productPreparionTimeContainer: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },

  productPreparionTimeText: {
    fontSize: 12,
    fontFamily: "Poppins_300Light",

    color: colors["gray-400"],
  },
});
