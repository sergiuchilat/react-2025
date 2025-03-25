import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  console.log(`Loading translations for locale: ${locale}`);



  return {
    locale,
    messages: (await import(`../locales/${locale}/translations.json`)).default
  };
});
