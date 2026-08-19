import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { LanguageCode, Translation } from '../data/translations';

interface FooterProps {
  currentLang: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  t: Translation;
}

const LANGUAGES: { code: LanguageCode; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'uz', label: "O'zbekcha" },
  { code: 'ru', label: 'Русский' },
  { code: 'es', label: 'Español' },
  { code: 'tr', label: 'Türkçe' },
];

const FOOTER_LINKS = [
  { name: 'Meta', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Help', href: '#' },
  { name: 'API', href: '#' },
  { name: 'Privacy', href: '#' },
  { name: 'Terms', href: '#' },
  { name: 'Locations', href: '#' },
  { name: 'Popular', href: '#' },
  { name: 'Instagram Lite', href: '#' },
  { name: 'Meta AI', href: '#' },
  { name: 'Threads', href: '#' },
  { name: 'Contact Uploading & Non-Users', href: '#' },
  { name: 'Meta Verified', href: '#' },
];

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onLanguageChange,
  t,
}) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLanguageLabel = LANGUAGES.find((l) => l.code === currentLang)?.label || 'English';

  return (
    <footer id="app-footer" className="w-full max-w-7xl mx-auto px-4 py-8 mt-auto select-none">
      {/* Top Links Row */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] text-[#737373]">
        {FOOTER_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => e.preventDefault()}
            className="hover:underline transition-colors leading-relaxed"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Bottom Language & Copyright Row */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-[12px] text-[#737373] mt-4">
        {/* Language Selector Dropdown */}
        <div className="relative inline-block" ref={dropdownRef}>
          <button
            type="button"
            id="language-selector-button"
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="inline-flex items-center gap-1 hover:text-neutral-900 cursor-pointer font-normal text-[12px] focus:outline-none"
          >
            <span>{currentLanguageLabel}</span>
            <ChevronDown className="w-3 h-3 text-[#737373]" />
          </button>

          {isLangOpen && (
            <div className="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 bg-white border border-[#dbdbdb] rounded-xl shadow-lg py-1.5 min-w-[140px] z-50">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    onLanguageChange(lang.code);
                    setIsLangOpen(false);
                  }}
                  className={`w-full text-left px-3.5 py-1.5 text-xs flex items-center justify-between transition-colors ${
                    currentLang === lang.code
                      ? 'bg-neutral-100 font-semibold text-neutral-900'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  <span>{lang.label}</span>
                  {currentLang === lang.code && <Check className="w-3.5 h-3.5 text-[#0095F6]" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Copyright */}
        <span id="copyright-text">{t.copyright}</span>
      </div>
    </footer>
  );
};
