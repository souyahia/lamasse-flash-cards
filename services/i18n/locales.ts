import { getLocales } from "expo-localization";


export const SUPPORTED_LOCALES = ["en", "fr"] as const;
export const DEFAULT_LOCALE = "en";
export const DEVICE_LOCALES = getLocales();
export const INITIAL_LOCALE = getLocales()[0]?.languageCode ?? DEFAULT_LOCALE;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

