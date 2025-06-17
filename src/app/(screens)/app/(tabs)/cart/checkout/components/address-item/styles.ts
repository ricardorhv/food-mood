import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 4,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  addressName: {
    color: colors.white,

    fontFamily: "Poppins_600Semibold",
    fontSize: 18,
  },

  settingBtn: {},

  addressDescription: {
    color: colors["gray-400"],
    fontSize: 12,
    fontFamily: "Poppins_400Regular",

    textAlign: "justify",
  },
});
