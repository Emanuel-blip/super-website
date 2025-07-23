import React, { useState, useContext, createContext } from 'react';
import { Globe } from 'lucide-react';

// Language Context
const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Initialize language from localStorage or default to 'hy'
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'hy';
    }
    return 'hy';
  });

  const languages = {
    hy: { name: 'Հայերեն', flag: '🇦🇲' },
    en: { name: 'English', flag: '🇺🇸' },
    ru: { name: 'Русский', flag: '🇷🇺' }
  };

  const changeLanguage = (langCode) => {
    setCurrentLanguage(langCode);
    // Persist language preference in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedLanguage', langCode);
    }
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors border border-gray-600/30"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm">{languages[currentLanguage].flag}</span>
        <span className="text-sm font-medium">{languages[currentLanguage].name}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-gray-800/95 backdrop-blur-sm border border-gray-600/30 rounded-lg shadow-xl z-50 min-w-[150px]">
          {Object.entries(languages).map(([code, lang]) => (
            <button
              key={code}
              onClick={() => {
                changeLanguage(code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-700/50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                currentLanguage === code ? 'bg-blue-600/20 text-blue-400' : 'text-gray-300'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

