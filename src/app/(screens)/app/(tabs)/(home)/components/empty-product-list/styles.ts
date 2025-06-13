import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: 60,
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,

    color: colors["gray-200"],
    textAlign: "center",
  },
});
