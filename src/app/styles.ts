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

  btnSignIn: {
    backgroundColor: colors.orange,
    color: colors.white,

    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,

    fontWeight: 600,
  },

  btnSignUp: {
    backgroundColor: colors.orange,
    color: colors.white,

    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,

    fontWeight: 600,
  },
});
