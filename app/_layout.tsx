import "@/global.css";
import "@/lib/i18next/i18n";
import "@/lib/dayjs/dayjs";
import "@/lib/reanimated/configureLogger";

import { Stack } from "expo-router";
import { Suspense } from "react";
import { SystemBars } from "react-native-edge-to-edge";

import { SuspenseFallback } from "@/components/SuspenseFallback";
import { DatabaseProvider } from "@/db/DatabaseProvider";

export default function RootLayout() {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <DatabaseProvider>
        <SystemBars />
        <Stack screenOptions={{ headerShown: false }} />
      </DatabaseProvider>
    </Suspense>
  );
}

export { ErrorBoundary } from "@/components/ErrorBoundary";
