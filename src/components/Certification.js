import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import PixLycee from "../assets/doc/attestation-pix-20230420.pdf";
import CV from "../assets/doc/CV.pdf";
import Certificat1 from "../assets/doc/Certificats/Certificat1.pdf";
import Certificat2 from "../assets/doc/Certificats/Certificat2.pdf";
import Certificat3 from "../assets/doc/Certificats/Certificat3.pdf";
import Certificat4 from "../assets/doc/Certificats/Certificat4.pdf";
import Certificat5 from "../assets/doc/Certificats/Certificat5.pdf";
import Certificat6 from "../assets/doc/Certificats/Certificat6.pdf";
import Certificat7 from "../assets/doc/Certificats/Certificat7.pdf";
import Certificat1Img from "../assets/img/Certificats/Certificat1.png";
import Certificat2Img from "../assets/img/Certificats/Certificat2.png";
import Certificat3Img from "../assets/img/Certificats/Certificat3.png";
import Certificat4Img from "../assets/img/Certificats/Certificat4.png";
import Certificat5Img from "../assets/img/Certificats/Certificat5.png";
import Certificat6Img from "../assets/img/Certificats/Certificat6.png";
import Certificat7Img from "../assets/img/Certificats/Certificat7.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certification = () => {
  const certificats = [
    {
      titre: "Découvrez les bases de la sécurité numérique",
      image: Certificat1Img,
      pdf: Certificat1
    },
    {
      titre: "Analysez et gérez des risques SI",
      image: Certificat2Img,
      pdf: Certificat2
    },
    {
      titre: "Gérez votre projet informatique facilement",
      image: Certificat3Img,
      pdf: Certificat3
    },
    {
      titre: "Découvrez la méthodologie DevOps",
      image: Certificat4Img,
      pdf: Certificat4
    },
    {
      titre: "Mettez en place l'intégration et la livraison continues avec la démarche DevOps",
      image: Certificat5Img,
      pdf: Certificat5
    },
    {
      titre: "Protégez vos systèmes numériques connectés grâce aux 12 bonnes pratiques de l'ANSSI",
      image: Certificat6Img,
      pdf: Certificat6
    },
    {
      titre: "Sécurisez vos applications",
      image: Certificat7Img,
      pdf: Certificat7
    }
  ];

  return (
    <section className="project" id="Certification">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>CV</h2>
                <p>Voici mon CV et les certifications que j'ai obtenues durant mes années de scolarité.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">CV</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Certification PIX</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">OpenClassrooms</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        <Col>
                          <p className="option-description">
                            Curriculum Vitae
                          </p>
                          <Row className="justify-content-center">
                            <Col md={8} lg={6}>
                              <a href={CV} target="_blank" rel="noopener noreferrer" className="cv-container">
                                <div className="cv-preview">
                                  <div className="cv-header">
                                    <h3>Lucas ZANELLI</h3>
                                    <p>Développeur Web</p>
                                  </div>
                                  <div className="cv-content">
                                    <div className="cv-section">
                                      <h4>Formation</h4>
                                      <div className="cv-item">
                                        <span className="cv-date">2022 - 2024</span>
                                        <h5>BTS SIO option SLAM</h5>
                                        <p>Ensemble Saint-Marie, Joinville-le-Pont</p>
                                      </div>
                                      <div className="cv-item">
                                        <span className="cv-date">2019 - 2022</span>
                                        <h5>Bac STI2D option SIN</h5>
                                        <p>Lycée Louis Armand, Nogent-sur-Marne</p>
                                      </div>
                                    </div>
                                    <div className="cv-section">
                                      <h4>Expérience</h4>
                                      <div className="cv-item">
                                        <span className="cv-date">Nov - Déc 2024</span>
                                        <h5>Stage Agefiph</h5>
                                        <p>Développeur Web - Vérification des règles Opquast</p>
                                      </div>
                                      <div className="cv-item">
                                        <span className="cv-date">Mai - Juin 2023</span>
                                        <h5>Stage UUDS Aéro</h5>
                                        <p>Développeur Web - Migration d'un site Ruby vers Symfony</p>
                                      </div>
                                    </div>
                                    <div className="cv-section">
                                      <h4>Compétences</h4>
                                      <div className="skills-grid">
                                        <div className="skill-item">
                                          <span className="skill-label">HTML/CSS</span>
                                          <div className="skill-level" style={{width: '35%'}}></div>
                                        </div>
                                        <div className="skill-item">
                                          <span className="skill-label">JavaScript</span>
                                          <div className="skill-level" style={{width: '15%'}}></div>
                                        </div>
                                        <div className="skill-item">
                                          <span className="skill-label">PHP</span>
                                          <div className="skill-level" style={{width: '20%'}}></div>
                                        </div>
                                        <div className="skill-item">
                                          <span className="skill-label">Python</span>
                                          <div className="skill-level" style={{width: '10%'}}></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cv-overlay">
                                    <span>Cliquez pour voir le CV complet</span>
                                  </div>
                                </div>
                              </a>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        <Col>
                          <p className="option-description">
                            PIX du lycée
                          </p>
                          <div className="button-container">
                            <a href={PixLycee} target="_blank" rel="noopener noreferrer">
                              <button className="gradient-button">
                                <span className="button-content">Attestation de Pix</span>
                              </button>
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        <Col>
                          <p className="option-description">
                            Certifications OpenClassrooms
                          </p>
                          <Row>
                            {certificats.map((certificat, index) => (
                              index % 2 === 0 && (
                                <Row key={index} className="mb-4">
                                  <Col md={6} className="mb-3 mb-md-0">
                                    <a href={certificat.pdf} target="_blank" rel="noopener noreferrer" className="cert-link">
                                      <div className="cert-container">
                                        <img src={certificat.image} alt={certificat.titre} className="cert-image" />
                                        <div className="cert-overlay">
                                          <p>{certificat.titre}</p>
                                        </div>
                                      </div>
                                    </a>
                                  </Col>
                                  {certificats[index + 1] && (
                                    <Col md={6}>
                                      <a href={certificats[index + 1].pdf} target="_blank" rel="noopener noreferrer" className="cert-link">
                                        <div className="cert-container">
                                          <img src={certificats[index + 1].image} alt={certificats[index + 1].titre} className="cert-image" />
                                          <div className="cert-overlay">
                                            <p>{certificats[index + 1].titre}</p>
                                          </div>
                                        </div>
                                      </a>
                                    </Col>
                                  )}
                                </Row>
                              )
                            ))}
                          </Row>
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

export default Certification;