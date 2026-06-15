import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "pt" | "en";

type LanguageContextValue = {
  language: Language;
  isEnglish: boolean;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      isEnglish: language === "en",
      setLanguage,
      toggleLanguage: () => setLanguage(language === "pt" ? "en" : "pt"),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}

export function pick<T>(language: Language, copy: { pt: T; en: T }) {
  return copy[language];
}
