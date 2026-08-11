import { useState, useEffect, useMemo, ReactNode } from 'react';
import { translations } from '@/data/portfolio';
import { Language, LanguageContextType, LanguageContext } from "./LanguageContextInstance";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value: LanguageContextType = useMemo(() => ({
    language,
    setLanguage,
    t: translations[language]
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
