import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

export const LibraryPage = () => {
  const { t } = useTranslation("App");

  return (
    <View className="flex-1 items-center justify-center">
      <Text>{t("helloWorld")}</Text>
    </View>
  );
};
