import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import PixLycee from "../assets/doc/attestation-pix-20230420.pdf";
import CV from "../assets/doc/CV.pdf";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certification = () => {
 return (
   <section className="project" id="Certification">
     <Container>
       <Row>
         <Col size={12}>
           <TrackVisibility>
             {({ isVisible }) =>
             <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
               <h2>CV</h2>
               <p>Voic mon CV et les cértifications que j'ai obtenu durant mes années de scolarité.</p>
               <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                   <Nav.Item>
                     <Nav.Link eventKey="first">CV</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                     <Nav.Link eventKey="second">Certification</Nav.Link>
                   </Nav.Item>
                 </Nav>
                 <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                   <Tab.Pane eventKey="first">
                     <Row>
                       <Col>
                         <div className="button-container">
                           <a href={CV} target="_blank" rel="noopener noreferrer">
                            <button className="gradient-button">
                              <span className="button-content">CV</span>
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
                          PIX
                         </p>
                          <div className="button-container">
                            <a href={PixLycee} target="_blank" rel="noopener noreferrer">
                              <button className="gradient-button">
                                <span className="button-content">Attestation du Pix de Lycée</span>
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

export default Certification;