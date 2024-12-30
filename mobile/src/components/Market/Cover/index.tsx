import { router } from "expo-router";
import { ImageBackground, View } from "react-native";
import { IconArrowLeft } from "@tabler/icons-react-native";

import { Button } from "@/components/Button";

import { styles } from "./styles";

interface CoverProps {
  uri: string;
}

export function Cover({ uri }: CoverProps) {
  const handleGoBack = () => router.back();

  return (
    <ImageBackground source={{ uri }} style={styles.container}>
      <View style={styles.header}>
        <Button style={{ width: 40, height: 40 }} onPress={handleGoBack}>
          <Button.Icon icon={IconArrowLeft} />
        </Button>
      </View>
    </ImageBackground>
  );
}
