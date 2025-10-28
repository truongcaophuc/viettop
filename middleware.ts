// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'vi'],
  defaultLocale: 'vi',
  // Nếu dùng next-intl v3: 'as-needed' là ổn (chỉ thêm locale khi cần)
  localePrefix: 'as-needed'
});

// CHỈ match các trang thật sự cần i18n.
// Loại trừ: _next, file có đuôi (.png/.json/.css...), api, images, locales, favicon, robots...
export const config = {
  matcher: [
    '/((?!_next|api|.*\\..*|favicon.ico|robots.txt|sitemap.xml|images|locales|public).*)'
  ]
};
