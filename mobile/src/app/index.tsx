import { View } from "react-native";

import { Steps } from "@/components/Steps";
import { Button } from "@/components/Button";
import { Welcome } from "@/components/Welcome";
import { router } from "expo-router";

export default function Index() {
  const handleNavigateHome = () => router.navigate("/home");

  return (
    <View style={{ flex: 1, gap: 40, paddingHorizontal: 40 }}>
      <Welcome />
      <Steps />
      <Button onPress={handleNavigateHome}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  );
}
