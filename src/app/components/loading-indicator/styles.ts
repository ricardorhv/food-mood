import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    position: "absolute",
    inset: 0,

    backgroundColor: colors.background,

    alignItems: "center",
    justifyContent: "center",
  },
});
