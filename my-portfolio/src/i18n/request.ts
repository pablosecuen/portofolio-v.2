import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Resolver la promesa de requestLocale
  const locale = await requestLocale;

  // Validar que el locale esté en los locales permitidos
  const validLocale = routing.locales.includes(locale as never)
    ? (locale as (typeof routing.locales)[number]) // Forzar tipo al valor permitido
    : routing.defaultLocale;

  return {
    locale: validLocale, // Aseguramos que sea uno de los locales válidos
    messages: (await import(`../messages/${validLocale}/common.json`)).default,
  };
});
