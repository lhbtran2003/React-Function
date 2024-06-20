import React from "react";
import { Container, Row, Col, FloatingLabel, Form, Button } from "react-bootstrap";
import "../style/content.css";

export const Content = () => {
  return (
    <div>
      <Container className="mt-0 custom-container">
        <Row>
          <Col
            md={6}
            className="d-flex align-items-center justify-content-start  p-0"
          >
            <img
              src="/src/assets/image/daugau.jpg"
              alt=""
              className="img-fluid"
            />
          </Col>
          <Col
            md={6}
            className="d-flex flex-column  align-items-start justify-content-center"
          >
            <h2>Log in to Exclusive</h2>
            <small>Enter your details below</small>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3 mt-3 p-0 "
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                className="border-0 border-bottom p-0 "
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                className="border-0 border-bottom p-0"
              />
            </FloatingLabel>
            <div className="d-flex mt-4">
              <Button variant="danger" className="me-5">Log in</Button>
              <Button variant="outline-danger" className="border-0">
                Forgot Password
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
