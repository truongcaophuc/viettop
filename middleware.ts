import { match } from 'assert';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'vi'],
    defaultLocale: 'vi',
    localePrefix: 'always',
});

export const config = {
matcher: ['/((?!_next|favicon.ico|assets).*)'],

};