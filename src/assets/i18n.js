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
            grid: {
              aboutMe: {
                title: "About me",
                text: "This is my first React application and I am currently working on it.",
                text2: "Interesting applications that I have created so far:",
                angular: "Restaurant (frontend: Angular - TypeScript)",
                springBoot: "Restaurant (backend: SpringBoot - Java)",
                nodeJS: "Discord Bot (Node.js)",
                java: "Duck Shooting Game (Java)",
                musicPlayer: "Music player that uses sensors (Android 11 - Java)",
                gitHubText: "More can be found on my GitHub: "
              },
              whoAmI: {
                title: "Who am I?",
                text: "My name is Daniel Chrzanowski. I am a final year student of Master of Computer Science studies at the University of Silesia."
              },
              technologies: "Technologies used in this application",
              plannedFunctions: {
                title: "Planned features",
                postureCheck: "- Posture check (hourly timer with notification and sound)",
                firebase: "- Firebase (writing to firebase)"
              },
              functions: {
                title: "Selected features",
                signIn: "Logging in using a Google account",
                dogeApi: "Connection with dog photos API",
                styleChange: "Dark / light style change",
                translation: "English translation"
              }
            }
          },
          gw2: {
            raidNotes: "Raid notes"
          },
          dogeAPI: {
            refresh: "Refresh",
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
            grid: {
              aboutMe: {
                title: "O mnie",
                text: "Jest to moja pierwsza aplikacja napisana z użyciem Reacta nad którą aktualnie pracuję.",
                text2: "Ciekawsze aplikacje, które do tej pory stworzyłem: ",
                angular: "Restauracja (frontend: Angular - TypeScript)",
                springBoot: "Restauracja (backend: SpringBoot - Java)",
                nodeJS: "Bot do discorda (Node.js)",
                java: "Gra strzelanie do kaczek (Java)",
                musicPlayer: "Odtwarzacz muzyki wykorzystujący sensory (Android 11 - Java)",
                gitHubText: "Więcej można znaleźć na moim GitHubie: "
              },
              whoAmI: {
                title: "Kim jestem?",
                text: "Nazywam się Daniel Chrzanowski. Jestem studentem ostatniego roku studiów magisterskich na Uniwersytecie Śląskim."
              },
              technologies: "Technologie wykorzystane w tej aplikacji",
              plannedFunctions: {
                title: "Planowane funkcje",
                postureCheck: "- Posture check (godzinny timer z powiadomieniem i dźwiękiem)",
                firebase: "- Firebase (zapisywanie do firebase)"
              },
              functions: {
                title: "Wybrane funkcje",
                signIn: "Logowanie z użyciem konta Google",
                dogeApi: "Połączeneie z API ze zdjęciami psów",
                styleChange: "Zmiana stylu ciemny / jasny",
                translation: "Tłuamczenie na język angielski"
              }
            }
          },
          gw2: {
            raidNotes: 'Notatki do rajdów'
          },
          dogeAPI: {
            refresh: "Odśwież",
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