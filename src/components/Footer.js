import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/portfolio.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/nav-icon2.png';

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
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}