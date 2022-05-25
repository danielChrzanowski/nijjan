import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import MainNavbar from './addons/mainNavbar/mainNavbar';
import './App.scss';
import Account from './components/Account/Account';
import DogeAPI from './components/DogeAPI/DogeAPI';
import GW2 from './components/Games/GW2/GW2';
import AllGames from './components/Games/ĄllGames/AllGames';
import Home from './components/Home/Home';

function App() {
  const [user, setUser] = useState(false);
  const { t, i18n } = useTranslation();

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  document.documentElement.style.setProperty('color-scheme', theme);  //scrollbar_theme

  return (
    <div className="App" data-theme={theme}>
      <BrowserRouter>
        <MainNavbar translation={t} i18n={i18n} user={user} setUser={setUser} theme={theme} setTheme={setTheme} />

        <div className='app-content'>
          <Routes>
            <Route exact path='/' element={<Home translation={t} title={t('router.nijjan')} />} />
            <Route path='/games/allGames' element={<AllGames translation={t} title={t('router.allGames')} />} />
            <Route path='/games/gw2' element={<GW2 translation={t} title='Nijjan - Guild Wars 2' />} />
            <Route path='/dogeAPI' element={<DogeAPI translation={t} title={t('router.dogeAPI')} theme={theme} />} />
            <Route path='/account' element={<Account translation={t} title={t('router.account')} user={user} />} />
          </Routes>
        </div>
      </BrowserRouter>


      <div className={theme === 'light' ? 'bg-light footer' : 'bg-dark footer'}>
        Daniel Chrzanowski v0.2.2
      </div>
    </div >
  );
}

export default App;
