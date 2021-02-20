import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Wrapper = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col />
        <Col xs={6} md={2} style={{ marginTop: '8px' }}>
          {props.text}
        </Col>
        <Col />
      </Row>
    </Container>
  );
};

export default Wrapper;
