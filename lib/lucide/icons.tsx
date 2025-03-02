import { default as ArrowLeft } from "lucide-react-native/dist/esm/icons/arrow-left";
import { default as Plus } from "lucide-react-native/dist/esm/icons/plus";
import { default as Settings } from "lucide-react-native/dist/esm/icons/settings";

export const LUCIDE_ICONS = {
  ["arrow-left"]: ArrowLeft,
  ["plus"]: Plus,
  ["settings"]: Settings,
};

export type IconName = keyof typeof LUCIDE_ICONS;
