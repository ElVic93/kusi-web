
export interface TrackingParams {
  page: string;
  section: string;
  label: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export enum BadgeVariant {
  INFO = 'info',
  AMBER = 'amber'
}
