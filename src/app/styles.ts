import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: colors.background,
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
    gap: 128,
  },

  logo: {
    width: 300,
    height: 300,
  },

  wrapperActions: {
    flexDirection: "row",
    gap: 48,
  },

  btnContainer: {
    backgroundColor: colors.primary,

    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 4,

    fontFamily: "Poppins_600SemiBold",
  },

  btnText: {
    color: colors.background,
    fontFamily: "Poppins_600SemiBold",
  },
});
