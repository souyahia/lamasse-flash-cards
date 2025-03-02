import { Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const SafeBottomSpacer = () => {
  const { bottom } = useSafeAreaInsets();

  return <View style={{ height: bottom }} />;
};

export const SafeTopSpacer = () => {
  const { top } = useSafeAreaInsets();

  const androidExtraTop = Platform.OS === "android" ? 10 : 0;
  const height = top + androidExtraTop;

  return <View style={{ height }} />;
};
