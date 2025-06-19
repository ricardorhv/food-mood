import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,

    paddingHorizontal: 24,
    paddingTop: 100,
  },

  addAddressBtn: {
    width: 45,
    height: 45,

    borderRadius: 100,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: colors.primary,

    position: "absolute",
    bottom: 100,
    right: 24,
    zIndex: 2,

    boxShadow: "0px 0px 10px #00000020",
  },
});
