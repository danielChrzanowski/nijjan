import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import './App.scss';
import Contact from './components/Contact/Contact';
import GW2 from './components/Games/GW2/GW2';
import Home from './components/Home/Home';

function App() {
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
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link onClick={switchTheme}><FontAwesomeIcon icon={faPalette} /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/games/gw2' element={<GW2 />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div >
      </BrowserRouter>
    </div>
  );
}

export default App;
