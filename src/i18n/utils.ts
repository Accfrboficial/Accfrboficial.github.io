import es from './es.json';
import pt from './pt.json';
import en from './en.json';

export type Locale = 'es' | 'pt' | 'en';

const translations: Record<Locale, Record<string, string>> = { es, pt, en };

export function useTranslations(lang: Locale) {
  return function t(key: string): string {
    return translations[lang]?.[key] ?? translations.es[key] ?? key;
  };
}

export const localeUrls: Record<Locale, string> = {
  es: '/',
  pt: '/pt/',
  en: '/en/',
};

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  pt: 'Português',
  en: 'English',
};

export const localeFlags: Record<Locale, string> = {
  es: '🇪🇸',
  pt: '🇧🇷',
  en: '🇺🇸',
};
