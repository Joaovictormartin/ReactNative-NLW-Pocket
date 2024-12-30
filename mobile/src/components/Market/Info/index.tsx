import { IconProps as TablerIconProps } from "@tabler/icons-react-native";
import { Text, View } from "react-native";

import { colors } from "@/styles/theme";

import { styles } from "./styles";

interface InfoProps {
  description: string;
  icon: React.ComponentType<TablerIconProps>;
}

export default function Info({ icon: Icon, description }: InfoProps) {
  return (
    <View style={styles.container}>
      <Icon size={16} color={colors.gray[400]} />
      <Text style={styles.text}>{description}</Text>
    </View>
  );
}
