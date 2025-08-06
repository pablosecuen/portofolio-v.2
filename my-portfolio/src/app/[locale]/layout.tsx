import { NextIntlClientProvider } from 'next-intl';
import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default async function LocaleLayout({
  children,
  params: rawParams,
}: {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  const params = await rawParams; // Espera a que los parámetros se resuelvan

  const locale = params?.locale || routing.defaultLocale;

  if (!routing.locales.includes(locale as 'es' | 'en' | 'fr')) {
    redirect(`/${routing.defaultLocale}/404`);
  }

  let messages;
  try {
    messages = (await import(`@/messages/${locale}/common.json`)).default;
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
