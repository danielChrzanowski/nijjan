import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonGroup, Container, Nav, Navbar, NavDropdown, ToggleButton } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import './App.scss';
import Contact from './components/Contact/Contact';
import GW2 from './components/Games/GW2/GW2';
import Home from './components/Home/Home';
import { useTranslation, Trans } from 'react-i18next';
import { useState } from 'react';

const radios = [
  { name: 'EN', value: 'en' },
  { name: 'PL', value: 'pl' }
];

function App() {
  const { t, i18n } = useTranslation();
  let activeLng = localStorage.getItem("i18nextLng");
  console.log(activeLng);
  const [radioValue, setRadioValue] = useState(activeLng);

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="App" data-theme={theme}>
      <BrowserRouter>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">Nijjan</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/contact">Features</Nav.Link>
                <NavDropdown title="Games" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/contact">All games</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/games/gw2">Guild Wars 2</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <NavDropdown.Divider />
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link onClick={switchTheme} ><FontAwesomeIcon icon={faPalette} /></Nav.Link>
                <ButtonGroup className="mb-2">
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`radio-${idx}`}
                      type="radio"
                      variant="secondary"
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

        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home translation={t} />} />
            <Route path='/games/gw2' element={<GW2 />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div >
      </BrowserRouter>
    </div>
  );
}

export default App;
