import {
  useFonts,
  Rubik_700Bold,
  Rubik_500Medium,
  Rubik_400Regular,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { colors } from "@/styles/theme";
import { Loading } from "@/components/Loading";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Rubik_700Bold,
    Rubik_500Medium,
    Rubik_400Regular,
    Rubik_600SemiBold,
  });

  if (!fontsLoaded) return <Loading />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.gray[100] },
          }}
        />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
