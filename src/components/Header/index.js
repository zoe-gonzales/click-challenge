import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import './style.css';

const Header = () => {
    return (
      <div>
        <Jumbotron className="heading" fluid>
          <Container fluid>
            <Row>
              <Col sm="10">
                <h1 className="display-4">Welcome to <span className="beatles">The Beatles</span> click challenge!</h1>
                <p className="lead">Click any of the album covers to start the game. To gain points, be sure to only click each one once.</p>
              </Col>
              <Col sm="2">
                <Row>
                  <h4>Your points: <span className="beatles"></span></h4>
                </Row>
                <Row>
                  <h4>Top score: <span className="beatles"></span></h4>
                </Row>
                <Row>
                  <p className="lead"></p>
                </Row>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
};
  
export default Header;