import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import './style.css';

export default function Header() {
    return (
      <div>
        <Jumbotron className="heading" fluid>
          <Container fluid>
            <Row>
              <Col sm="1"></Col>
              <Col sm="10">
                <h5 className="display-4 text-center"><span className="beatles">The Beatles</span> click challenge!</h5>
                <p className="lead text-center">Click an album cover to start the game. To gain points, only click each one once.</p>
              </Col>
              <Col sm="1"></Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    )
}