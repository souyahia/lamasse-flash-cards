import { useColorScheme } from "nativewind";
import { useTranslation } from "react-i18next";
import { Button, Text, View } from "react-native";

import { Icon } from "@/components/Icon";

export const LibraryPage = () => {
  const { t } = useTranslation("App");
  const { toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-foreground">{t("helloWorld")}</Text>
      <Button title="test" onPress={toggleColorScheme} />
      <Icon name="globe" />
    </View>
  );
};
