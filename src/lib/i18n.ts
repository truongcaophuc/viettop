// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

if (!i18n.isInitialized) {
  i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
      lng: "vi",
      fallbackLng: "vi",
      debug: false,

      backend: {
        loadPath: "/locales/{{lng}}.json", // /public/locales/vi.json
      },

      interpolation: {
        escapeValue: false,
      },

      // Quan trọng khi xài React + CSR, tránh Suspense default gây nhấp nháy khó kiểm soát
      react: {
        useSuspense: false,
      },
    });
}

export default i18n;
