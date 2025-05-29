import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "vi"],
  defaultLocale: "vi",

  localePrefix: {
    mode: "always",
    prefixes: {
      vi: "vi",
      en: "en",
    },
  },

  pathnames: {},
});
