// src/components/Skills.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Skills() {
  const skills = ["Programming", "Time Management", "Problem Solving", "Fast-Learner", "Critical Thinking"];

  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-center">
          <h1 className="mb-5">My Skills</h1>
        </Col>
      </Row>
      <Row>
        {skills.map((skill, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body className="text-center">
                <Card.Title>{skill}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;
