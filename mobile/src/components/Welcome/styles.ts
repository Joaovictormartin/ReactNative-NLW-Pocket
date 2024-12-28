import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";

export const styles = StyleSheet.create({
  logo: {
    width: 48,
    height: 48,
    marginTop: 24,
    marginBottom: 28,
  },
  title: {
    fontSize: 24,
    color: colors.gray[600],
    fontFamily: fontFamily.bold,
  },
  subTitle: {
    fontSize: 16,
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
    marginTop: 12,
  },
});
