import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.background,

    paddingHorizontal: 24,
    paddingTop: 100,
    paddingBottom: 40,
  },

  finishOrderBtn: {
    width: "100%",
    marginTop: 20,

    padding: 14,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: colors.primary,
    borderRadius: 4,
  },

  finishOrderText: {
    color: colors.background,

    fontFamily: "Poppins_600SemiBold",
  },
});
