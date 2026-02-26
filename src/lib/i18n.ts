import { translations } from './translations';

export type Lang = 'en' | 'es';

export function getT(lang: Lang) {
  return translations[lang];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'es' : 'en';
}