import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    gap: 14,
    height: 56,
    maxHeight: 56,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.green.base,
  },
  title: {
    fontSize: 16,
    color: colors.gray[100],
    fontFamily: fontFamily.semiBold,
  },
});
