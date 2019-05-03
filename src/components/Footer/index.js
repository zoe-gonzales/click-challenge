import React from 'react';
import './style.css';
import { Container, Row, Col } from 'reactstrap';

export default function Footer(props) {
    return (
        <footer className="footer">
            <Container>
                <Row className="userScores">
                <Col sm="4"></Col>
                <Col sm="2">
                    <h4 className="lead text-center">Your points: <span className="beatles-score">{props.currentScore}</span></h4>
                </Col>
                <Col sm="2">
                    <h4 className="lead text-center">Top score: <span className="beatles-score">{props.topScore}</span></h4>
                </Col>
                <Col sm="4"></Col>
                </Row>
            </Container>
        </footer>
    )    
}