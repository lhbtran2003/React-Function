import React from "react";
import { Form, Navbar, Col, Row, Button, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Form_test = () => {
  return (
    <div className="container">
      <h1 className="text-center my-2">Danh sách công việc</h1>
      <Navbar className=" mb-4">
        <Form className="w-100">
          <Row className="d-flex align-items-center">
            <Col xs="auto" className="flex-grow-1">
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2 w-100"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
      <ListGroup>
        <ListGroup.Item>
          <div>
            <Form.Check type="checkbox" label="Check me out" />
            <span>Đi nhảy đầm</span>
          </div>
          <div></div>
        </ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </div>
  );
};
