import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    alignItems: "center",
    gap: 22,

    backgroundColor: colors.background,
  },

  foodFilterInput: {
    width: "100%",
    padding: 12,
    backgroundColor: colors["gray-700"],
    boxShadow: "0px 0px 10px #00000010",

    color: colors["gray-400"],

    fontSize: 12,
    borderRadius: 4,

    fontFamily: "Poppins_400Regular",

    outlineWidth: 1,
    outlineColor: colors.primary,
    borderWidth: 0,
  },

  filterContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "stretch",
    width: "100%",
  },
});
