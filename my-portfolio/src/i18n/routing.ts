import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['es', 'en', 'fr'], // Idiomas disponibles
  defaultLocale: 'es', // Idioma predeterminado
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
