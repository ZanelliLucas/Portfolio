import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import UnrealEngineTexte from "../assets/doc/Veilles/Unreal_Engine_Texte.pdf";
import UnrealEngineDiapo from "../assets/doc/Veilles/Unreal_Engine_Diapo.pdf";
import PiratageJeuxVideoTexte from "../assets/doc/Veilles/Piratage_de_Jeux_Video_Texte.pdf";
import PiratageJeuxVideoDiapo from "../assets/doc/Veilles/Piratage_de_Jeux_Video_Diapo.pdf";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Veilles = () => {
  return (
    <section className="project" id="Veilles">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Veilles</h2>
                <p>Voici trouverez mes 2 veilles</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Veille Technologique</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Veille Cyberséccurité</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        <Col>
                          <p className="option-description">
                            Unreal Engine
                          </p>
                          <div className="button-container">
                            <a href={UnrealEngineTexte} target="_blank" rel="noopener noreferrer">
                              <button className="gradient-button">
                                <span className="button-content">Document</span>
                              </button>
                            </a>
                            <a href={UnrealEngineDiapo} target="_blank" rel="noopener noreferrer">
                              <button className="gradient-button">
                                <span className="button-content">Diaporama</span>
                              </button>
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        <Col>
                          <p className="option-description">
                            Piratage de Jeux vidéo
                          </p>
                          <div className="button-container">
                            <a href={PiratageJeuxVideoTexte} target="_blank" rel="noopener noreferrer">
                              <button className="gradient-button">
                                <span className="button-content">Document</span>
                              </button>
                            </a>
                            <a href={PiratageJeuxVideoDiapo} target="_blank" rel="noopener noreferrer">
                              <button className="gradient-button">
                                <span className="button-content">Diaporama</span>
                              </button>
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Veilles;