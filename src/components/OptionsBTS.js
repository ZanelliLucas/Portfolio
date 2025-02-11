import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import logoBTSSIO from "../assets/img/logo-BTS-SIO.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Options = () => {
 return (
   <section className="project" id="options">
     <Container>
       <Row>
         <Col size={12}>
           <TrackVisibility>
             {({ isVisible }) =>
             <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
               <h2>Options du BTS</h2>
               <p>Voici les 2 options du BTS SIO</p>
               <img src={logoBTSSIO} alt="logo BTS SIO" style={{ width: '200px', margin: '20px auto', display: 'block' }}/>
               <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                   <Nav.Item>
                     <Nav.Link eventKey="first">Option SLAM</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                     <Nav.Link eventKey="second">Option SISR</Nav.Link>
                   </Nav.Item>
                 </Nav>
                 <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                   <Tab.Pane eventKey="first">
                     <Row>
                       <Col>
                         <p className="option-description">
                           L'option <strong>SLAM (Solutions Logicielles et Applications Métiers)</strong> forme les étudiants à la conception et au développement d'applications. Notre programme complet vous prépare aux défis du développement moderne.
                         </p>
                         <ul className="option-list">
                           <li>Développement d'applications web et mobiles modernes</li>
                           <li>Maîtrise des langages de programmation essentiels (Java, PHP, JavaScript, Python)</li>
                           <li>Conception et gestion avancée de bases de données</li>
                           <li>Analyse et conception de solutions logicielles innovantes</li>
                           <li>Sécurisation des applications et gestion des vulnérabilités</li>
                           <li>Pratique des méthodologies agiles (Scrum, Kanban)</li>
                         </ul>
                         <p className="option-career">
                           <strong>Débouchés Professionnels</strong> Les diplômés SLAM s'orientent vers des postes de développeur d'applications, analyste programmeur, développeur web full-stack, concepteur de solutions logicielles, ou chef de projet junior dans des entreprises de toutes tailles.
                         </p>
                       </Col>
                     </Row>
                   </Tab.Pane>
                   <Tab.Pane eventKey="second">
                     <Row>
                       <Col>
                         <p className="option-description">
                           L'option <strong>SISR (Solutions d'Infrastructure, Systèmes et Réseaux)</strong> forme les experts en infrastructures informatiques de demain. Notre formation couvre l'ensemble des compétences nécessaires à la gestion des systèmes et réseaux modernes.
                         </p>
                         <ul className="option-list">
                           <li>Administration avancée des systèmes Windows Server et Linux</li>
                           <li>Configuration et sécurisation des infrastructures réseaux</li>
                           <li>Maîtrise des technologies de virtualisation et du Cloud Computing</li>
                           <li>Mise en place de solutions de sécurité robustes</li>
                           <li>Gestion professionnelle du support utilisateur</li>
                           <li>Management proactif des infrastructures IT</li>
                         </ul>
                         <p className="option-career">
                           <strong>Débouchés Professionnels</strong> Les diplômés SISR évoluent vers des postes d'administrateur systèmes et réseaux, expert en cybersécurité, architecte Cloud, responsable infrastructure IT, ou consultant en solutions d'infrastructure.
                         </p>
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

export default Options;