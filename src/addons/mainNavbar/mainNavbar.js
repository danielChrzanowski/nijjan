import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { Container, Nav, NavDropdown, Navbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authentication } from '../../services/firebase';
import { SignOutModal } from '../signOutModal/signOutModal';
import './mainNavbar.scss';

const MainNavbar = (props) => {
  const t = props.translation;
  const i18n = props.i18n;
  const user = props.user;
  const setUser = props.setUser;
  const theme = props.theme;
  const setTheme = props.setTheme;

  const [modalShow, setModalShow] = useState(false);
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const activeLng = localStorage.getItem("i18nextLng") === ('en' || undefined || null || '') ? 'en' : 'pl';
  const langButtonTheme = theme === 'light' ? 'primary' : 'secondary';

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
    <Navbar expanded={navbarExpanded} style={{ transition: "all 0.7s" }}
      sticky="top" collapseOnSelect expand="lg" bg={theme} variant={theme}>

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
            <Nav.Link as={Link} to="/kinga" onClick={() => setNavbarExpanded(false)}>Kinga</Nav.Link>
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

      <SignOutModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        t={t}
        user={user}
        theme={theme}
      />
    </Navbar>
  )
}

MainNavbar.propTypes = {};

MainNavbar.defaultProps = {};

export default MainNavbar;
