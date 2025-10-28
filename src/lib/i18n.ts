import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // <-- Dùng để tải file JSON
  .use(initReactI18next) // <-- Kết nối với React
  .init({
    lng: "vi", // Ngôn ngữ mặc định
    fallbackLng: "vi", // Ngôn ngữ dự phòng nếu key bị thiếu
    debug: true, // Bật console.log để debug (tắt đi khi deploy)

    // Nơi tìm các file JSON
    backend: {
      loadPath: "/locales/{{lng}}.json", // Đường dẫn tới file public
    },

    // Cần thiết cho React
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;