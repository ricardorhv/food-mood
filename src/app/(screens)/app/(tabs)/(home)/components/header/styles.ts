import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    alignItems: "center",
    gap: 22,

    backgroundColor: colors.background,
  },

  address: {
    alignItems: "center",
  },

  addressInfo: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: colors["gray-200"],
  },

  pickerAddressContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 2,
  },

  locationIcon: {
    color: colors.primary,
  },

  addressPicker: {
    backgroundColor: "transparent",
    outlineWidth: 0,
    borderWidth: 0,
    fontFamily: "Poppins_700Bold",
    color: colors.primary,
    fontSize: 18,
  },

  addressPickerItem: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },

  foodFilterInput: {
    width: "100%",
    padding: 12,
    backgroundColor: colors["gray-700"],
    boxShadow: "0px 0px 10px #00000010",

    fontSize: 12,
    borderRadius: 4,

    fontFamily: "Poppins_400Regular",

    outlineWidth: 1,
    outlineColor: colors.primary,
    borderWidth: 0,
  },

  filterContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "stretch",
    width: "100%",
  },

  foodFilterOptions: {
    borderRadius: 4,

    padding: 10,
    backgroundColor: colors["gray-700"],
    boxShadow: "0px 0px 10px #00000010",

    alignItems: "center",
    justifyContent: "center",
  },
});
