import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
    color: colors["gray-400"],
    textAlign: "center",

    padding: 24,
  },
});
