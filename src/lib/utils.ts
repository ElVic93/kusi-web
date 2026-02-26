
import { CONTACT_WHATSAPP } from './constants';
import type { TrackingParams } from './types';
import { translations } from './translations';

export const trackEvent = (eventName: string, params: TrackingParams) => {
  console.log(`[Tracking Event]: ${eventName}`, {
    ...params,
    timestamp: new Date().toISOString()
  });
};

export const getWhatsAppLink = (lang: 'es' | 'en' = 'es') => {
  const baseMessage = translations[lang].whatsappMessage;
  return `https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent(baseMessage)}`;
};

export const trackWhatsAppClick = (label: string, section: string) => {
  const urlParams = new URLSearchParams(window.location.search);
  const utm_source = urlParams.get('utm_source') || 'web';
  const utm_medium = urlParams.get('utm_medium') || 'cta';
  const utm_campaign = urlParams.get('utm_campaign') || 'kusi_mvp';

  trackEvent('click_whatsapp', {
    page: window.location.pathname,
    section,
    label,
    utm_source,
    utm_medium,
    utm_campaign
  });
};
