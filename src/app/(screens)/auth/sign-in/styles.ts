import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    gap: 16,
    backgroundColor: colors.background,
  },

  inputField: {
    backgroundColor: colors["gray-700"],
    padding: 12,
    borderRadius: 4,
    width: "100%",
    color: colors["gray-400"],
    borderWidth: 0,

    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },

  btnSignIn: {
    width: "100%",

    padding: 14,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: colors.primary,
    borderRadius: 4,

    marginTop: 10,
  },

  btnTextSignIn: {
    fontFamily: "Poppins_600SemiBold",
    color: colors.background,
  },

  createAccount: {
    alignItems: "flex-start",
    width: "100%",
  },

  createAccountText: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    color: colors.primary,
    textDecorationLine: "underline",
  },
});
