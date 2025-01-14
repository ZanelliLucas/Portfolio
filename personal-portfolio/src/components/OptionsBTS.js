import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Options = () => {

  const options = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="options">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Options du BTS</h2>
                <p>Voici le 2 options du BTS SIO</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {projects.map((project, index) => (
                      <Nav.Item key={index}>
                        <Nav.Link eventKey={`project-${index}`}>{`Projet ${index + 1}`}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {projects.map((project, index) => (
                      <Tab.Pane eventKey={`project-${index}`} key={index}>
                        <Row>
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        </Row>
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"/>
    </section>
  )
}