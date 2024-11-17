import { NextRequest, NextResponse } from 'next/server';
import { routing } from '@/i18n/routing';

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.includes('/404')) {
    return NextResponse.next();
  }

  const localeMatch = routing.locales.find((locale) =>
    pathname.startsWith(`/${locale}`)
  );

  if (!localeMatch) {
    const locale = routing.defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
