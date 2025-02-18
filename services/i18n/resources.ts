import en from "@/translations/en.json";
import fr from "@/translations/fr.json";

import type { Locale } from "./locales";

export const DEFAULT_RESOURCES = en;
export type LocaleResources = typeof DEFAULT_RESOURCES;

export const LOCAL_RESOURCES: Record<Locale, LocaleResources> = {
  en,
  fr,
};
