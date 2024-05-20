import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiHtml5, DiCss3, DiJavascript1, DiSqllite } from "react-icons/di";
import { FaReact, FaPython } from "react-icons/fa"; 

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact /> {/* Use the imported icons */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython /> {/* Use the imported Python icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSqllite />
      </Col>
    </Row>
  );
}

export default Techstack;
