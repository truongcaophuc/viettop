"use client";

import { ReactNode, useEffect } from "react";
import i18n from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";
import HttpBackend from "i18next-http-backend";

// Di chuyển cấu hình i18n vào đây
if (!i18n.isInitialized) { // Chỉ khởi tạo một lần
  i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
      lng: "vi",
      fallbackLng: "vi",
      debug: process.env.NODE_ENV === 'development', // Chỉ debug khi phát triển
      backend: {
        loadPath: "/locales/{{lng}}.json",
      },
      interpolation: {
        escapeValue: false,
      },
      // Thêm tùy chọn này để tránh lỗi suspense trên server
      react: {
        useSuspense: false, 
      }
    });
}


export default function I18nProvider({ children }: { children: ReactNode }) {
  // Không cần useEffect nếu bạn import config như trên
  // Chỉ cần trả về Provider của react-i18next
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}