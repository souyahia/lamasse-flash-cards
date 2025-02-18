import type { LocaleResources } from "@/lib/i18next/resources";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "App";
    resources: LocaleResources;
  }
}