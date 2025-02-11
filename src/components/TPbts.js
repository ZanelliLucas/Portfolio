import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TPGitHub from "../assets/doc/TP_GitHub.pdf";
import TPKaliLinux from "../assets/doc/TP_KaliLinux.pdf";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const TPbts = () => {
 return (
   <section className="project" id="TPbts">
     <Container>
       <Row>
         <Col size={12}>
           <TrackVisibility>
             {({ isVisible }) =>
             <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
               <h2>TP</h2>
               <p>Voici trouverez mes TP fait sur les 2 année de BTS</p>
               <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                   <Nav.Item>
                     <Nav.Link eventKey="first">GitHub</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                     <Nav.Link eventKey="second">Join the ripper</Nav.Link>
                   </Nav.Item>
                 </Nav>
                 <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                   <Tab.Pane eventKey="first">
                     <Row>
                       <Col>
                         <p className="option-description">
                          Vous trouverez un document sur le TP GitHub.
                         </p>
                         <div className="button-container">
                           <a href={TPGitHub} target="_blank" rel="noopener noreferrer">
                             <button className="gradient-button">
                               <span className="button-content">Document</span>
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
                          Vous trouverez un document sur le TP Join the ripper en utilisant un VM de Kali Linux.
                         </p>
                         <div className="button-container">
                           <a href={TPKaliLinux} target="_blank" rel="noopener noreferrer">
                             <button className="gradient-button">
                               <span className="button-content">Document</span>
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

export default TPbts;