import { createContext } from 'react';
import { translations } from '@/data/portfolio';

export type Language = 'en' | 'es';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
