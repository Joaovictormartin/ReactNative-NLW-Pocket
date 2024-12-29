import {
  Text,
  TextProps,
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
} from "react-native";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean;
}
interface IconProps {
  icon?: React.ComponentType<TablerIconProps>;
}

function Button({ children, style, isLoading = false, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={isLoading}
      style={[styles.container, style]}
      {...props}
    >
      {isLoading ? <ActivityIndicator color={colors.gray[100]} /> : children}
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  return <Text style={styles.title}>{children}</Text>;
}

function Icon({ icon: Icon }: IconProps) {
  return Icon && <Icon size={24} color={colors.gray[100]} />;
}

Button.Title = Title;
Button.Icon = Icon;

export { Button };
