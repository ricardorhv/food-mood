import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  signUpContainer: {
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
    // outlineWidth: 1,
    // outlineColor: colors.primary,
    borderWidth: 0,

    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },

  btnSignUp: {
    width: "100%",

    padding: 14,
    marginTop: 20,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: colors.primary,
    borderRadius: 4,
  },

  btnTextSignUp: {
    fontFamily: "Poppins_600SemiBold",
    color: colors.background,
  },
});
