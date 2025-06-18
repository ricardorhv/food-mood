import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.background,
    paddingHorizontal: 24,

    justifyContent: "center",
    alignItems: "center",
    gap: 100,
  },

  image: {
    width: 250,
    height: 250,

    resizeMode: "contain",
  },

  textContainer: {},

  title: {
    fontFamily: "Poppins_500Medium",
    fontSize: 20,

    color: colors.primary,
    textAlign: "center",
  },

  subtitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,

    color: colors["gray-200"],
    textAlign: "center",
  },
});
