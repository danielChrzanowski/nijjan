import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import GW2 from './components/Games/GW2/GW2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">Nijjan</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/contact">Features</Nav.Link>
                <NavDropdown title="Games" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/games/gw2">Guild Wars 2</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/contact">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games/gw2' element={<GW2 />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
