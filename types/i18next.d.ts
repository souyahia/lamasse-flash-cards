import type { LocaleResources } from '../services/i18n/resources';

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "App";
    resources: LocaleResources;
  }
}