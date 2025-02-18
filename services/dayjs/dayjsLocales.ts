import "dayjs/locale/en";
import "dayjs/locale/fr";

import dayjs from "dayjs";

import { INITIAL_LOCALE } from "../i18n/locales";

function simplifyLocaleCode(localeCode: string): string {
  return localeCode.substring(0, 2);
}

export function setDayjsLocale(localeCode: string): void {
  dayjs.locale(simplifyLocaleCode(localeCode));
}

setDayjsLocale(INITIAL_LOCALE);
