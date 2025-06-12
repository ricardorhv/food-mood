import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  productListContainer: {
    gap: 24,
    paddingBottom: 24,
  },

  wrapper: {
    paddingHorizontal: 24,
    flex: 1,
  },
});
