import { Text, View } from "react-native";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";

import { colors } from "@/styles/colors";

import { styles } from "./styles";

interface StepProps {
  title: string;
  description: string;
  icon: React.ComponentType<TablerIconProps>;
}

export function Step({ title, description, icon: Icon }: StepProps) {
  return (
    <View style={styles.container}>
      {Icon && <Icon size={32} color={colors.red.base} />}

      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
