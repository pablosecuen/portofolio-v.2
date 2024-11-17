import { NextIntlClientProvider } from 'next-intl';
import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';


export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: { locale?: string };
}) {
  const resolvedParams = await Promise.resolve(params);

  const locale = resolvedParams?.locale || routing.defaultLocale;

  if (!routing.locales.includes(locale as 'es' | 'en' | 'fr')) {
    console.error(`Invalid locale detected: ${locale}`);
    redirect(`/${routing.defaultLocale}/404`);
  }

  // Intentar cargar mensajes de traducción
  let messages;
  try {
    messages = (await import(`../../messages/${locale}/common.json`)).default;
  } catch (error) {
    console.error(`Error al cargar mensajes para el idioma ${locale}:`, error);
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
