import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import logoUUDS from "../assets/img/logo-UUDS.png";
import logoAgefiph from "../assets/img/AGEFIPH_LOGO.png"
import noteSynthese from "../assets/doc/Note-de-Synthese.pdf";
import noteSynthese2 from "../assets/doc/Note-de-Synthese2.pdf";
import TableauSynthese from "../assets/doc/Tableau_de_synthese.pdf";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Stage = () => {
 return (
   <section className="project" id="stage">
     <Container>
       <Row>
         <Col size={12}>
           <TrackVisibility>
             {({ isVisible }) =>
             <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
               <h2>Stage</h2>
               <p>Voici trouverez mes 2 stages que j'ai fait durant mon BTS.</p>
               <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                   <Nav.Item>
                     <Nav.Link eventKey="first">1 Stage</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                     <Nav.Link eventKey="second">2 Stage</Nav.Link>
                   </Nav.Item>
                 </Nav>
                 <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                   <Tab.Pane eventKey="first">
                     <Row>
                       <Col>
                         <img src={logoUUDS} alt="logo UUDS Aéro" style={{ width: '200px', margin: '20px auto', display: 'block' }}/>
                         <p className="option-description">
                          Pour mon premier stage, j'ai candidaté dans la société UUDS Aéro en tant que développeur web pour une durée de 6 semaines. Pendant ce stage, j'ai pu travailler sur un site interne de l'entreprise qui était de recoder un site web qui était en ruby et de mettre en Symfony.
                         </p>
                         <div className="button-container">
                           <a href={TableauSynthese} target="_blank" rel="noopener noreferrer">
                             <button className="gradient-button">
                               <span className="button-content">Tableau de synthèse</span>
                             </button>
                           </a>
                           <a href={noteSynthese} target="_blank" rel="noopener noreferrer">
                             <button className="gradient-button">
                               <span className="button-content">Note de synthèse</span>
                             </button>
                           </a>
                         </div>
                       </Col>
                     </Row>
                   </Tab.Pane>
                   <Tab.Pane eventKey="second">
                     <Row>
                       <Col>
                         <img src={logoAgefiph} alt="logo Agefiph" style={{ width: '200px', margin: '20px auto', display: 'block' }}/>
                         <p className="option-description">
                          Pour mon deuxième stage, j'ai eu la chance d'être séléctionné pour faire mon stage dans l'association Agefiph en tant que développeur web pour une durée de 6 semaines du 12 novembre 2024 au 20 décembre 2024. Pendant ce stage, j'ai pu travailler sur la vérification des 240 règles Opquast sur le site principal et aussi en parrallèle sur la refonte du site principal, j'ai donc du créer une page de maintenance en HTML et en CSS.
                         </p>
                         <div className="button-container">
                           <a href={TableauSynthese} target="_blank" rel="noopener noreferrer">
                             <button className="gradient-button">
                               <span className="button-content">Tableau de synthèse</span>
                             </button>
                           </a>
                           <a href={noteSynthese2} target="_blank" rel="noopener noreferrer">
                             <button className="gradient-button">
                               <span className="button-content">Note de synthèse</span>
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
};

export default Stage;