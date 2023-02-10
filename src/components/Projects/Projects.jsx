import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    eos cumque, molestiae, doloremque obcaecati harum
                    voluptatibus fugiat nobis ratione tempora at fugit
                    voluptate, quas perferendis. Neque provident quos sequi
                    quidem?
                  </p>
                
            <Tab.Container id="projects-tabs" defaultActiveKey="/home">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCards key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
