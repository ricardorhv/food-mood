import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
    gap: 128,
  },

  logo: {
    width: 250,
    height: 250,
  },

  wrapperActions: {
    flexDirection: "row",
    gap: 48,
  },

  btnContainer: {
    backgroundColor: colors.orange,
    color: colors.white,

    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,

    fontFamily: "Poppins_600SemiBold",
  },

  btnText: {
    color: colors.white,
    fontFamily: "Poppins_600SemiBold",
  },
});
