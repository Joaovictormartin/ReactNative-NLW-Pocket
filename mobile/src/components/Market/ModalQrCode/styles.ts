import { StyleSheet } from "react-native";

import { colors } from "@/styles/theme";

export const styles = StyleSheet.create({
  qrCodeBox: {
    width: 250,
    height: 250,
    position: "absolute",
    top: "40%",
    left: "45%",
    right: "45%",

    borderWidth: 2,
    borderRadius: 6,
    borderColor: colors.red.base,
    backgroundColor: "transparent",
    transform: [{ translateX: -100 }, { translateY: -100 }],
  },
});
