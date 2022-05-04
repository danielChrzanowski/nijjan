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
          navbar: {
            games: "Games",
            allGames: "All games",
            sign_in: "Sign in",
            sign_out: "Sign out"
          },
          home: {
            title1: "About",
            games: "Games - games informations",
            dogeAPI: "Doge API - Dog photos API",
            sign_in: "Sign in - sign in to the app",
            styleChange: " - style change",
            languageChange: "EN/PL - language change"
          },
          gw2: {
            raidNotes: 'Raid notes'
          },
          signOutModal: {
            sign_out: "Sign out",
            areYouSure: "Are you sure to sign out?",
            closeBtn: "Close"
          }
        }
      },
      pl: {
        translation: {
          navbar: {
            games: "Gry",
            allGames: "Wszystkie gry",
            sign_in: "Zaloguj się",
            sign_out: "Wyloguj się"
          },
          home: {
            title1: 'O aplikacji',
            games: "Gry - informacje o grach",
            dogeAPI: "Doge API - API ze zdjęciami psów",
            sign_in: "Zaloguj się - logowanie do aplikacji",
            styleChange: " - zmiana stylu",
            languageChange: "EN/PL - zmiana języka"
          },
          gw2: {
            raidNotes: 'Notatki do rajdów'
          },
          signOutModal: {
            sign_out: "Wyloguj się",
            areYouSure: "Czy na pewno chcesz się wylogować?",
            closeBtn: "Zamknij"
          }
        }
      }
    }
  });

export default i18n;