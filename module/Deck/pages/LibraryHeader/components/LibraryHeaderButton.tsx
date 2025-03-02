import { memo } from "react";
import type { ButtonProps } from "react-native";

import { Button } from "@/components/buttons/Button";
import type { IconName } from "@/lib/lucide/icons";

interface Props extends Pick<ButtonProps, "onPress" | "accessibilityLabel"> {
  icon: IconName;
}

const LibraryHeaderButtonUnmemoized = ({
  icon,
  onPress,
  accessibilityLabel,
}: Props) => {
  return (
    <Button
      iconLeft={icon}
      color="ghost"
      shape="pill"
      animated={false}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
    />
  );
};

export const LibraryHeaderButton = memo(LibraryHeaderButtonUnmemoized);
