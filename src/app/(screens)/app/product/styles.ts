import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  image: {
    width: "100%",
    height: 200,
  },

  overlay: {
    position: "absolute",
    inset: 0,

    flex: 1,
    backgroundColor: colors["gray-700"],
    opacity: 0.4,
  },

  detailsContainer: {
    gap: 30,
    marginHorizontal: 24,
    marginTop: 20,
  },

  header: {
    gap: 2,
  },

  name: {
    fontSize: 18,
    fontFamily: "Poppins_700Bold",

    color: colors.primary,
  },

  description: {
    fontSize: 12,
    color: colors["gray-400"],
    fontFamily: "Poppins_300Light",

    textAlign: "justify",
  },

  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },

  category: {
    fontSize: 12,
    fontFamily: "Poppins_500Medium",

    color: colors["gray-200"],
  },

  preparionTimeContainer: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },

  preparionTimeText: {
    fontSize: 12,
    fontFamily: "Poppins_500Medium",

    color: colors["gray-200"],
  },

  price: {
    fontSize: 20,
    fontFamily: "Poppins_700Bold",

    color: colors.white,

    alignSelf: "flex-end",
    marginTop: 20,
  },

  addToCartBtn: {
    width: "100%",
    marginTop: 20,

    padding: 10,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: colors.primary,
    borderRadius: 4,

    flexDirection: "row",
    gap: 8,
  },

  addToCartBtnText: {
    color: colors.secondary,

    fontFamily: "Poppins_600SemiBold",
  },
});
