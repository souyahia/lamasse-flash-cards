import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { DEFAULT_LOCALE, INITIAL_LOCALE, SUPPORTED_LOCALES } from "./locales";
import { LOCAL_RESOURCES as LOCALE_RESOURCES } from "./resources";

void i18n
  .use(initReactI18next)
  .init({resources: LOCALE_RESOURCES,
    lng: INITIAL_LOCALE,
    fallbackLng: DEFAULT_LOCALE,
    supportedLngs: SUPPORTED_LOCALES,
    ns: "App",
    interpolation: {
      escapeValue: false
    }
  });
