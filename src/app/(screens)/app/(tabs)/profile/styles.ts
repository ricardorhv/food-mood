import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapperContainer: {
    flex: 1,
  },

  wrapperImage: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },

  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  form: {
    flex: 1,
    gap: 16,
    marginHorizontal: 20,
  },

  inputField: {
    backgroundColor: colors["gray-100"],
    padding: 14,
    borderRadius: 4,
    width: "100%",
    color: colors["gray-900"],
    outlineWidth: 1,
    outlineColor: colors.orange,
    borderWidth: 0,
  },

  label: {
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: "bold",
    color: colors.orange,
  },

  labelInput: {
    gap: 8,
  },

  btnUpdate: {
    width: "100%",

    padding: 14,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: colors.orange,
    borderRadius: 4,
  },

  btnTextUpdate: {
    fontWeight: 600,
    color: colors.white,
  },
});
