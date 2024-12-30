import { View } from "react-native";
import { router } from "expo-router";

import { Steps } from "@/components/Steps";
import { Button } from "@/components/Button";
import { Welcome } from "@/components/Welcome";

export default function Index() {
  const handleNavigateHome = () => router.navigate("/home");

  return (
    <View style={{ flex: 1, gap: 40, paddingHorizontal: 30, paddingBottom: 30 }}>
      <Welcome />
      <Steps />
      <Button onPress={handleNavigateHome}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  );
}
