import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

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
              myApplications: {
                title: "My applications",
                text: "This is my first React application and I am currently working on it. The source code is available at: ",
                text2: "Interesting applications that I have created so far:",
                angular: "Restaurant (frontend: Angular - TypeScript)",
                springBoot: "Restaurant (backend: SpringBoot - Java)",
                nodeJS: "Discord Bot (Node.js)",
                java: "Duck Shooting Game (Java)",
                musicPlayer: "Music player that uses sensors (Android 11 - Java)",
                gitHubText: "More can be found on my GitHub: "
              },
              aboutMe: {
                title: "About me",
                text: "My name is Daniel Chrzanowski. I am a Front-end developer."
              },
              technologies: "Technologies used in this application",
              plannedFeatures: {
                title: "Planned features",
                postureCheck: "- Posture check (hourly timer with notification and sound)",
                firebase: "- Firebase (writing to firebase)"
              },
              features: {
                title: "Selected features",
                signIn: "Signing in using a Google account",
                dogeApi: "Connection with a dog photos API",
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
              myApplications: {
                title: "Moje aplikacje",
                text: "Jest to moja pierwsza aplikacja napisana z użyciem Reacta nad którą aktualnie pracuję. Kod źródłowy dostępny jest pod adresem: ",
                text2: "Ciekawsze aplikacje, które do tej pory stworzyłem: ",
                angular: "Restauracja (frontend: Angular - TypeScript)",
                springBoot: "Restauracja (backend: SpringBoot - Java)",
                nodeJS: "Bot do discorda (Node.js)",
                java: "Gra strzelanie do kaczek (Java)",
                musicPlayer: "Odtwarzacz muzyki wykorzystujący sensory (Android 11 - Java)",
                gitHubText: "Więcej można znaleźć na moim GitHubie: "
              },
              aboutMe: {
                title: "O mnie",
                text: "Nazywam się Daniel Chrzanowski. Jestem Front-end developerem."
              },
              technologies: "Technologie wykorzystane w tej aplikacji",
              plannedFeatures: {
                title: "Planowane funkcje",
                postureCheck: "- Posture check (godzinny timer z powiadomieniem i dźwiękiem)",
                firebase: "- Firebase (zapisywanie do firebase)"
              },
              features: {
                title: "Wybrane funkcje",
                signIn: "Logowanie z użyciem konta Google",
                dogeApi: "Połączeneie z API ze zdjęciami psów",
                styleChange: "Zmiana stylu ciemny / jasny",
                translation: "Tłumaczenie na język angielski"
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