// src/components/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container className="about mt-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="mb-4">About Me</h1>
          <p className="lead"style={{ textAlign: 'justify' }}>
            Greetings! I am Jeffrey B. Ramirez, a 3rd Year Computer Science student at Pamantasan ng Cabuyao. 
            I love reading manhwas in my free time. 
            I strive to manage my time efficiently, ensuring I never miss a lesson or activity.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
