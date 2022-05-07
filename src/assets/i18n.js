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
            raidNotes: "Raid notes"
          },
          dogeAPI: {
            highest_resolution_info: "Doges are being downloaded at the highest possible resolution so it can take a while"
          },
          signOutModal: {
            sign_out: "Sign out",
            areYouSure: "Are you sure you want to sign out?",
            closeBtn: "Close"
          },
          router: {
            nijjan: "Nijjan",
            allGames: "Nijjan - All games",
            dogeAPI: "Nijjan - Doge API",
            account: "Nijjan - My account"
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
          dogeAPI: {
            highest_resolution_info: "Psy są pobierane w najwyższej możliwej rozdzielczości, więc może to chwilę zająć"
          },
          signOutModal: {
            sign_out: "Wyloguj się",
            areYouSure: "Czy na pewno chcesz się wylogować?",
            closeBtn: "Zamknij"
          },
          router: {
            nijjan: "Nijjan",
            allGames: "Nijjan - Wszystkie gry",
            dogeAPI: "Nijjan - Doge API",
            account: "Nijjan - Moje konto"
          }
        }
      }
    }
  });

export default i18n;