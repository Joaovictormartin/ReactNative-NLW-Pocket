import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
  calloutName: {
    fontSize: 14,
    color: colors.gray[600],
    fontFamily: fontFamily.medium,
  },
  calloutAddress: {
    fontSize: 12,
    color: colors.gray[600],
    fontFamily: fontFamily.regular,
  },
});
