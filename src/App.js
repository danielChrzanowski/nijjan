import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { ButtonGroup, Container, Nav, Navbar, NavDropdown, ToggleButton } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import './App.scss';
import Contact from './components/Contact/Contact';
import DogeAPI from './components/DogeAPI/DogeAPI';
import GW2 from './components/Games/GW2/GW2';
import AllGames from './components/Games/ĄllGames/AllGames';
import Home from './components/Home/Home';

const radios = [
  { name: 'EN', value: 'en' },
  { name: 'PL', value: 'pl' }
];

function App() {
  const { t, i18n } = useTranslation();
  const activeLng = localStorage.getItem("i18nextLng");
  const [radioValue, setRadioValue] = useState(activeLng);

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const langButtonTheme = theme === 'light' ? 'primary' : 'secondary';

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="App" data-theme={theme}>
      <BrowserRouter>
        <Navbar style={{ position: 'sticky' }} fixed="top" collapseOnSelect expand="lg" bg={theme} variant={theme}>
          <Container>
            <Navbar.Brand as={Link} to="/">Nijjan</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title={t('navbar.games')} id="collasible-nav-dropdown" menuVariant={theme}>
                  <NavDropdown.Item as={Link} to="/games/allGames">{t('navbar.allGames')}</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/games/gw2">Guild Wars 2</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/dogeAPI">Doge API</Nav.Link>
              </Nav>
              <Nav>
                <NavDropdown.Divider />
                <Nav.Link as={Link} to="/contact">{t('navbar.contact')}</Nav.Link>
                <Nav.Link onClick={switchTheme} ><FontAwesomeIcon icon={faPalette} /></Nav.Link>
                <ButtonGroup className="mb-2 langButtons">
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`radio-${idx}`}
                      type="radio"
                      variant={langButtonTheme}
                      name="radio"
                      value={radio.value}
                      checked={radioValue === radio.value}
                      onChange={(e) => setRadioValue(e.currentTarget.value)}
                      onClick={() => i18n.changeLanguage(radio.value)}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route exact path='/' element={<Home translation={t} />} />
          <Route path='/games/allGames' element={<AllGames translation={t} />} />
          <Route path='/games/gw2' element={<GW2 translation={t} />} />
          <Route path='/dogeAPI' element={<DogeAPI translation={t} />} />
          <Route path='/contact' element={<Contact translation={t} />} />
        </Routes>
      </BrowserRouter>

      <div className={theme === 'light' ? 'bg-light footer' : 'bg-dark footer'}>
        Daniel Chrzanowski v{ENV['REACT_APP_VERSION']}
      </div>
    </div >
  );
}

export default App;
