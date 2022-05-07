import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import { SignOutModal } from './addons/signOutModal/signOutModal';
import './App.scss';
import Account from './components/Account/Account';
import DogeAPI from './components/DogeAPI/DogeAPI';
import GW2 from './components/Games/GW2/GW2';
import AllGames from './components/Games/ĄllGames/AllGames';
import Home from './components/Home/Home';
import { authentication } from './services/firebase';

function App() {
  const [user, setUser] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const { t, i18n } = useTranslation();
  const activeLng = localStorage.getItem("i18nextLng") === ('en' || undefined || null || '') ? 'en' : 'pl';

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const langButtonTheme = theme === 'light' ? 'primary' : 'secondary';

  document.documentElement.style.setProperty('color-scheme', theme);  //scrollbar_theme

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        setUser(result.user);
        //console.log(result.user);

        /*  const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;*/
      }).catch((error) => {
        /* const errorCode = error.code;
         const errorMessage = error.message;
         const email = error.email;
         const credential = GoogleAuthProvider.credentialFromError(error);*/
        console.log(error);
      });
  }

  return (
    <div className="App" data-theme={theme}>
      <div className='app-content'>
        <BrowserRouter>
          <Navbar expanded={navbarExpanded} style={{ position: 'sticky', transition: "all 0.7s" }}
            fixed="top" collapseOnSelect expand="lg" bg={theme} variant={theme}>

            <Container>
              <Navbar.Brand as={Link} to="/" onClick={() => setNavbarExpanded(false)}>Nijjan</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setNavbarExpanded(navbarExpanded ? false : "expanded")} />

              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown title={t('navbar.games')} id="collasible-nav-dropdown" menuVariant={theme}>
                    <NavDropdown.Item as={Link} to="/games/allGames" onClick={() => setNavbarExpanded(false)}>{t('navbar.allGames')}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/games/gw2" onClick={() => setNavbarExpanded(false)}>Guild Wars 2</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/dogeAPI" onClick={() => setNavbarExpanded(false)}>Doge API</Nav.Link>
                </Nav>

                <Nav>
                  <NavDropdown.Divider />
                  {!user ? <Nav.Link onClick={signInWithGoogle}>{t('navbar.sign_in')}</Nav.Link> : ''}
                  {user ?
                    <NavDropdown
                      id="collasible-nav-dropdown"
                      menuVariant={theme}
                      title={
                        <img
                          src={user.photoURL}
                          className="rounded-circle"
                          style={{ height: '20px', width: '20px' }}
                          alt='Logged user menu dropdown' />
                      }>
                      <NavDropdown.Item as={Link} to="/account" onClick={() => setNavbarExpanded(false)}>{user.displayName}</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={() => setModalShow(true)}> {t('navbar.sign_out')}</NavDropdown.Item>
                    </NavDropdown>
                    : ''}

                  <Nav.Link onClick={switchTheme} ><FontAwesomeIcon icon={faPalette} style={{ marginLeft: '5px', marginRight: '5px' }} /></Nav.Link>

                  <ToggleButtonGroup type="radio" name="options" defaultValue={activeLng} className="lang-buttons" >
                    <ToggleButton
                      id="tbg-radio-1"
                      variant={langButtonTheme}
                      value={'en'}
                      onChange={(e) => i18n.changeLanguage('en')}>
                      EN
                    </ToggleButton>
                    <ToggleButton
                      id="tbg-radio-2"
                      variant={langButtonTheme}
                      value={'pl'}
                      onChange={(e) => i18n.changeLanguage('pl')}>
                      PL
                    </ToggleButton>
                  </ToggleButtonGroup>

                </Nav>
              </Navbar.Collapse>
            </Container>

          </Navbar>

          <Routes>
            <Route exact path='/' element={<Home translation={t} title={t('router.nijjan')} />} />
            <Route path='/games/allGames' element={<AllGames translation={t} title={t('router.allGames')} />} />
            <Route path='/games/gw2' element={<GW2 translation={t} title='Nijjan - Guild Wars 2' />} />
            <Route path='/dogeAPI' element={<DogeAPI translation={t} title={t('router.dogeAPI')} theme={theme} />} />
            <Route path='/account' element={<Account translation={t} title={t('router.account')} user={user} />} />
          </Routes>
        </BrowserRouter>
      </div>

      <div className={theme === 'light' ? 'bg-light footer' : 'bg-dark footer'}>
        Daniel Chrzanowski v{process.env.REACT_APP_VERSION}
      </div>

      <SignOutModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        t={t}
        user={user}
        theme={theme}
      />

    </div >
  );
}

export default App;
