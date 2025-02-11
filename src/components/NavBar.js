import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';
import portfolio from '../assets/img/portfolio.png';

export const NavBar = () => {
 const location = useLocation();
 const [scrolled, setScrolled] = useState(false);

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

 return (
   <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
     <Container>
       <Navbar.Brand as={Link} to="/">
        <img src={portfolio} alt="Logo" />
       </Navbar.Brand>

       <Navbar.Toggle aria-controls="basic-navbar-nav">
         <span className="navbar-toggler-icon"></span>
       </Navbar.Toggle>

       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="ms-auto">
           <Nav.Link 
             as={Link} 
             to="/" 
             className={location.pathname === '/' ? 'active navbar-link' : 'navbar-link'}
           >
             Home
           </Nav.Link>

           <Nav.Link 
             as={Link} 
             to="/formation" 
             className={location.pathname === '/formation' ? 'active navbar-link' : 'navbar-link'}
           >
             Formation
           </Nav.Link>

           <Nav.Link 
             as={Link} 
             to="/parcours-professionnel" 
             className={location.pathname === '/parcours-professionnel' ? 'active navbar-link' : 'navbar-link'}
           >
             Parcours professionnel
           </Nav.Link>

           <Nav.Link 
             as={Link} 
             to="/parcours-universitaire" 
             className={location.pathname === '/parcours-universitaire' ? 'active navbar-link' : 'navbar-link'}
           >
             Parcours universitaire
           </Nav.Link>

           <Nav.Link 
             as={Link} 
             to="/developpement-professionnel" 
             className={location.pathname === '/developpement-professionnel' ? 'active navbar-link' : 'navbar-link'}
           >
             Développement professionnel
           </Nav.Link>
         </Nav>

         <span className="navbar-text">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/lucas-zanelli-3059882a4" target="_blank" rel="noopener noreferrer">
              <img src={navIcon1} alt="LinkedIn" />
            </a>
            <a href="https://github.com/ZanelliLucas" target="_blank" rel="noopener noreferrer">
              <img src={navIcon2} alt="GitHub" />
            </a>
          </div>
         </span>
       </Navbar.Collapse>
     </Container>
   </Navbar>
 );
};