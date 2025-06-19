import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.background,

    paddingHorizontal: 24,
    paddingVertical: 80,

    position: "relative",
  },

  title: {
    fontFamily: "Poppins_600Semibold",
    fontSize: 18,

    color: colors.primary,
  },

  closeBtn: {
    position: "absolute",
    top: 62,
    right: 24,

    zIndex: 10,
  },

  formContainer: {
    gap: 20,
    marginTop: 40,
    paddingHorizontal: 8,
  },

  input: {
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

  addNewAddressBtn: {
    width: "100%",

    padding: 14,
    marginTop: 20,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: colors.primary,
    borderRadius: 4,
  },

  addNewAddressText: {
    fontFamily: "Poppins_600SemiBold",
    color: colors.background,
  },
});
