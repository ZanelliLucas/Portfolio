  import { useState, useEffect } from "react";
  import { Navbar, Nav, Container } from "react-bootstrap";
  import { Link } from "react-router-dom";
  import navIcon1 from '../assets/img/nav-icon1.svg';
  import navIcon2 from '../assets/img/nav-icon2.svg';
  import portfolio from '../assets/img/portfolio.svg';
  import { HashLink } from 'react-router-hash-link';

  export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const [scrolled, setScrolled] = useState(false);

    // Gestion du scroll pour changer la classe de la navbar
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    };

    return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          {/* Logo du site */}
          <Navbar.Brand as={Link} to="/">
            <img src={portfolio} alt="Logo" style={{ width: '50px', height: 'auto' }} />
          </Navbar.Brand>

          {/* Bouton pour le mode mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          {/* Liens de navigation */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/Home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/Formation" className={activeLink === 'formation' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('formation')}>
                Formation
              </Nav.Link>

              <Nav.Link as={HashLink} to="#parcours_professionnel" className={activeLink === 'parcours_professionnel' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('parcours_professionnel')}>
                Parcours professionnel
              </Nav.Link>

              <Nav.Link as={HashLink} to="#parcours_universitaire" className={activeLink === 'parcours_universitaire' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('parcours_universitaire')}>
                Parcours universitaire
              </Nav.Link>

              <Nav.Link as={HashLink} to="#developpement_professionnel" className={activeLink === 'developpement_professionnel' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('developpement_professionnel')}>
                Développement professionnel
              </Nav.Link>
            </Nav>

            {/* Icônes des réseaux sociaux */}
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/lucas-zanelli-3059882a4" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://github.com/ZanelliLucas" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon2} alt="GitHub" style={{ width: '40px', height: '40px' }} />
                </a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
