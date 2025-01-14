import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/portfolio.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/nav-icon2.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              
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
            </div>
            <p>Copyright 2024. Zanelli Lucas</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}