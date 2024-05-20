import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Restaurant App"
              description="In our Restaurant App, embark on a journey of culinary creativity, where the seamless blend of innovation thrives. Powered by React, Python, Flask, and SQLite, witness the enchanting magic unfold as you effortlessly add, fetch, edit, and delete items, crafting a gastronomic tale."
              ghLink="https://github.com/vidya-piske/restaurant-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title=""
              description=""
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title=""
              description=""
              ghLink=""             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
