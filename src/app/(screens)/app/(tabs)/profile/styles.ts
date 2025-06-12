import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapperContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 24,
    backgroundColor: colors.background,
  },

  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  form: {
    width: "100%",
    gap: 16,
    marginHorizontal: 20,
  },

  inputField: {
    backgroundColor: colors["gray-700"],
    padding: 12,
    borderRadius: 4,
    width: "100%",
    color: colors["gray-400"],
    outlineWidth: 1,
    outlineColor: colors.primary,
    borderWidth: 0,

    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },

  label: {
    fontSize: 12,
    fontFamily: "Poppins_700Bold",
    color: colors.primary,
  },

  labelInput: {
    gap: 8,
  },

  btnUpdate: {
    width: "100%",
    marginTop: 20,

    padding: 14,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: colors.primary,
    borderRadius: 4,
  },

  btnTextUpdate: {
    color: colors.secondary,

    fontFamily: "Poppins_600SemiBold",
  },
});
