import { NextIntlClientProvider } from 'next-intl';
import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';
import './globals.css';

export default async function RootLayout({
  children,
  params: rawParams,
}: {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>; // No es una promesa
}) {
  const params = await rawParams; // Resuelve la promesa
  const locale = params?.locale || routing.defaultLocale;

  if (!routing.locales.includes(locale as 'es' | 'en' | 'fr')) {
    if (!params?.locale) {
      return (
        <html lang={routing.defaultLocale}>
          <body>
            <h1>Página no encontrada</h1>
            {children}
          </body>
        </html>
      );
    }
    redirect(`/${routing.defaultLocale}/404`);
  }

  let messages;
  try {
    messages = (await import(`../messages/${locale}/common.json`)).default;
  } catch (error) {
    console.error(
      `No se pudieron cargar los mensajes para el idioma: ${locale}`,
      error
    );
    redirect(`/${routing.defaultLocale}/404`);
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={{ common: messages }}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
