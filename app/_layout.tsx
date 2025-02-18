import "@/global.css";
import "@/lib/i18next/i18n";
import "@/lib/dayjs/dayjs";

import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
