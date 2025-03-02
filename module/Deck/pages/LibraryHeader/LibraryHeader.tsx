import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

import { LibraryHeaderButton } from "./components/LibraryHeaderButton";
import { LibraryHeaderSpacer } from "./components/LibraryHeaderSpacer";

const LibraryHeaderUnmemoized = () => {
  const { t } = useTranslation();

  const isRoot = true;

  return (
    <View className="pt-safe flex-row items-center justify-between px-3 pb-1 bg-background">
      {isRoot ? (
        <LibraryHeaderButton
          icon="settings"
          accessibilityLabel={t("accessibility.settings")}
        />
      ) : (
        <LibraryHeaderButton
          icon="arrow-left"
          accessibilityLabel={t("accessibility.back")}
        />
      )}
      <Text className="text-xl font-medium">{t("library.title")}</Text>
      {isRoot ? (
        <LibraryHeaderButton
          icon="plus"
          accessibilityLabel={t("accessibility.createDeck")}
        />
      ) : (
        <LibraryHeaderSpacer />
      )}
    </View>
  );
};

export const LibraryHeader = memo(LibraryHeaderUnmemoized);
