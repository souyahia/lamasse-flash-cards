import "@/global.css";
import "@/lib/i18next/i18n";
import "@/lib/dayjs/dayjs";
import "@/lib/reanimated/configureLogger";

import { Stack } from "expo-router";
import { SystemBars } from "react-native-edge-to-edge";

export default function RootLayout() {
  return (
    <>
      <SystemBars />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
