import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          homeComponent: {
            title1: 'Strona startowa',
          }
        }
      },
      pl: {
        translation: {
          homeComponent: {
            title1: 'Nijjan',
          }
        }
      }
    }
  });

export default i18n;