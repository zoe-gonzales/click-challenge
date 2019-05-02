import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import './style.css';

export default function Header(props) {
    return (
      <div>
        <Jumbotron className="heading" fluid>
          <Container fluid>
            <Row>
              <Col sm="1"></Col>
              <Col sm="10">
                <h4 className="display-4 text-center"><span className="beatles">The Beatles</span> click challenge!</h4>
                <p className="lead text-center">Click an album cover to start the game. To gain points, only click each one once.</p>
              </Col>
              <Col sm="1"></Col>
            </Row>
            <Row>
              <Col sm="4"></Col>
              <Col sm="2">
                <h4 className="text-center">Your points: <span className="beatles-score">{props.currentScore}</span></h4>
              </Col>
              <Col sm="2">
                <h4 className="text-center">Top score: <span className="beatles-score">{props.topScore}</span></h4>
              </Col>
              <Col sm="4"></Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    )
}