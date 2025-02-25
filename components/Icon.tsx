import type { LucideProps } from "lucide-react-native";
import { cssInterop } from "nativewind";
import { memo } from "react";

import type { IconName } from "@/lib/lucide/icons";
import { LUCIDE_ICONS } from "@/lib/lucide/icons";
import { cn } from "@/lib/tailwind/cn";

export interface IconProps extends LucideProps {
  name: IconName;
}

const IconBase = ({ name, ...props }: IconProps) => {
  const Icon = LUCIDE_ICONS[name];

  return <Icon color="" {...props} />;
};

cssInterop(IconBase, {
  className: {
    target: "style",
    nativeStyleToProp: {
      color: true,
      width: true,
      height: true,
      opacity: true,
    },
  },
});

const IconWithDefaultValuesUnmemoized = ({ className, ...props }: IconProps) => {
  return (
    <IconBase
      className={cn("size-5 text-foreground", className)}
      {...props}
    />
  );
};

const conWithDefaultValues = memo(IconWithDefaultValuesUnmemoized);

export { conWithDefaultValues as Icon };
