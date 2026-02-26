import React, { useMemo, useState } from 'react';
import type { Lang } from '../lib/i18n';
import { getT, otherLang } from '../lib/i18n';

type Props = {
  lang: Lang;
};

function withLangPrefix(lang: Lang, path: string) {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'en' ? `/en${clean}` : `/es${clean}`;
}

// Lee el path actual en cliente para construir el “switch” de idioma manteniendo ruta
function getCurrentPathWithoutLang(): string {
  if (typeof window === 'undefined') return '/';
  const p = window.location.pathname || '/';
  return p.replace(/^\/(en|es)(\/|$)/, '/');
}

export default function Navbar({ lang }: Props) {
  const t = useMemo(() => getT(lang), [lang]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/experience', label: t.nav.experience },
    { href: '/how-it-works', label: t.nav.howItWorks },
    { href: '/pricing', label: t.nav.pricing },
    { href: '/faq', label: t.nav.faq },
  ];

  const langLabel = lang === 'en' ? 'ES' : 'EN';

  const onSwitchLanguage = () => {
    const next = otherLang(lang);
    const basePath = getCurrentPathWithoutLang();
    window.location.href = withLangPrefix(next, basePath);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E4E6E8]">
      <div className="max-w-[1120px] mx-auto px-4 md:px-6 h-[72px] flex items-center justify-between">
        {/* Brand */}
        <a href={withLangPrefix(lang, '/')} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[12px] bg-[#C4161C] text-white font-extrabold flex items-center justify-center">
            K
          </div>
          <div className="leading-tight">
            <div className="font-bold tracking-tight">KUSI</div>
            <div className="text-[11px] tracking-[0.25em] text-[#111111]/70 -mt-0.5">
              FÚTBOL TOURS
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={withLangPrefix(lang, l.href)}
              className="text-sm font-medium text-[#111111]/70 hover:text-[#C4161C] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={onSwitchLanguage}
            className="h-[40px] px-3 rounded-[12px] border border-[#E4E6E8] bg-white hover:bg-[#F7F8FA] text-sm font-semibold"
            aria-label="Switch language"
          >
            {langLabel}
          </button>

          <a
            href={withLangPrefix(lang, '/#pricing')}
            className="inline-flex items-center justify-center font-semibold transition-all active:scale-95 rounded-[14px] bg-[#C4161C] text-white hover:brightness-95 h-[44px] px-6 shadow-sm"
          >
            {t.nav.reserve}
          </a>
        </div>

        {/* Mobile */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-[12px] border border-[#E4E6E8] bg-white hover:bg-[#F7F8FA]"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          <span className="text-xl leading-none">≡</span>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[#E4E6E8] bg-white animate-in slide-in-from-top">
          <div className="max-w-[1120px] mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={withLangPrefix(lang, l.href)}
                className="py-2 text-sm font-semibold text-[#111111]/80 hover:text-[#C4161C]"
              >
                {l.label}
              </a>
            ))}

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onSwitchLanguage}
                className="h-[44px] px-4 rounded-[14px] border border-[#E4E6E8] bg-white hover:bg-[#F7F8FA] text-sm font-semibold"
              >
                {langLabel}
              </button>

              <a
                href={withLangPrefix(lang, '/#pricing')}
                className="flex-1 inline-flex items-center justify-center font-semibold transition-all active:scale-95 rounded-[14px] bg-[#C4161C] text-white hover:brightness-95 h-[44px] px-6 shadow-sm"
              >
                {t.nav.reserve}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}