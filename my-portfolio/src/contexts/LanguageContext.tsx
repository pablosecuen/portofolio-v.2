import { useState, ReactNode } from 'react';
import { translations } from '@/data/portfolio';
import { Language, LanguageContextType, LanguageContext } from "./LanguageContextInstance";



export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
