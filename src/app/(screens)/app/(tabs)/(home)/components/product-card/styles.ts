import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    overflow: "hidden",
    boxShadow: "0px 0px 10px #00000015",
  },

  addProductToMinicartBtn: {
    width: 35,
    height: 35,

    borderRadius: 100,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: colors.orange,

    position: "absolute",
    left: "50%",
    top: -20,
    transform: "translateX(-50%)",

    boxShadow: "0px 0px 10px #00000020",
  },

  productImage: {
    width: "100%",
    height: 200,
  },

  productInfoContainer: {
    backgroundColor: colors.white,
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

    color: colors.orange,
  },

  productPrice: {
    flexShrink: 0,

    fontSize: 14,
    fontFamily: "Poppins_700Bold",

    color: colors["gray-900"],
  },

  productCategory: {
    fontSize: 12,
    fontFamily: "Poppins_300Light",

    color: colors["gray-900"],
  },

  productPreparionTimeContainer: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },

  productPreparionTimeText: {
    fontSize: 12,
    fontFamily: "Poppins_300Light",

    color: colors["gray-900"],
  },
});
