import { memo } from "react";
import { View } from "react-native";

const LibraryHeaderSpacerUnmemoized = () => {
  return <View className="w-[40px]" />;
};

export const LibraryHeaderSpacer = memo(LibraryHeaderSpacerUnmemoized);
