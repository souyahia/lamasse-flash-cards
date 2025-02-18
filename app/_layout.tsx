import "@/global.css";
import "@/services/i18n/i18n";

import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
