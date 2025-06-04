import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  emptyCartText: {
    fontSize: 16,
    fontWeight: 500,
    color: colors["gray-400"],
    textAlign: "center",
  },
});
