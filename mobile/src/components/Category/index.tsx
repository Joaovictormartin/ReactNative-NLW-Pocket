import { Text, Pressable, PressableProps } from "react-native";

import { colors } from "@/styles/colors";
import { categoriesIcons } from "@/utils/categories-icons";

import { styles } from "./styles";

interface CategoryProps extends PressableProps {
  name: string;
  iconId: string;
  isSelected?: boolean;
}

export function Category({ name, iconId, isSelected = false, ...props }: CategoryProps) {
  const Icon = categoriesIcons[iconId];

  return (
    <Pressable style={[styles.container, isSelected && styles.containerSelected]} {...props}>
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[styles.name, isSelected && styles.nameSelected]}>{name}</Text>
    </Pressable>
  );
}
