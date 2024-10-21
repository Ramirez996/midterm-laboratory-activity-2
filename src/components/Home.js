// src/components/Home.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="mb-4">Welcome to My Profile!</h1>
          <p className="lead">Aspiring to be a good programmer. Enjoy your visit!</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
