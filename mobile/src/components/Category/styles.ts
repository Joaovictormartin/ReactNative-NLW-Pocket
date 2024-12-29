import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    gap: 10,
    height: 36,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 12,

    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.gray[300],
    backgroundColor: colors.gray[100],
  },
  name: {
    fontSize: 12,
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
  },
  containerSelected: {
    backgroundColor: colors.green.base,
    borderColor: colors.green.base,
  },
  nameSelected: {
    color: colors.gray[100],
  },
});
