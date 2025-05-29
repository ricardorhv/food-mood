import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    gap: 16,
    backgroundColor: colors.white,
  },

  inputField: {
    backgroundColor: colors["gray-100"],
    padding: 14,
    borderRadius: 4,
    width: "100%",
    color: colors["gray-900"],
    outlineWidth: 1,
    outlineColor: colors.orange,
    borderWidth: 0,
  },

  btnSignIn: {
    width: "100%",

    padding: 14,

    alignItems: "center",
    justifyContent: "center",

    fontWeight: 600,
    color: colors.white,
    backgroundColor: colors.orange,
    borderRadius: 4,
  },
});
