// src/components/Submit.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function Submit() {
  const location = useLocation();
  const { name, email, message } = location.state || {};

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>Thank you, {name}!</h1>
          <p>Your message has been successfully sent.</p>
          <h3>Details:</h3>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Message:</strong> {message}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Submit;
