import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vidya Piske </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently employed as a software developer at Nu10 Technologies Pvt Ltd.
            <br />
            I have completed B.Tech in Electrical and Electronics Engineering from Mahatma Gandhi University
            Nalgonda.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity"><ImPointRight /> Engaging in Researching New Things</li>
          <li className="about-activity"><ImPointRight /> Creating New Projects</li>
          <li className="about-activity"><ImPointRight /> Listening to Music</li>
        </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vidya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
