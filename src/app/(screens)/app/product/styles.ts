import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: "100%",
    height: 200,
  },

  overlay: {
    position: "absolute",
    inset: 0,

    flex: 1,
    backgroundColor: colors["gray-900"],
    opacity: 0.4,
  },

  detailsContainer: {
    gap: 8,
    marginHorizontal: 24,
    marginTop: 20,
  },

  header: {
    gap: 2,
  },

  name: {
    fontSize: 18,
    fontFamily: "Poppins_700Bold",

    color: colors["orange"],
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
    flex: 1,
  },

  category: {
    fontSize: 12,
    fontFamily: "Poppins_300Light",

    color: colors["gray-900"],
  },

  preparionTimeContainer: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },

  preparionTimeText: {
    fontSize: 12,
    fontFamily: "Poppins_300Light",

    color: colors["gray-900"],
  },

  price: {
    fontSize: 16,
    fontFamily: "Poppins_700Bold",

    color: colors["gray-900"],

    alignSelf: "flex-end",
    marginTop: 20,
  },
});
