import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from "../../assets/Group.svg"
export const Login = () => {
    return (
        <Container>
            <Row>
                <Col sm={8}><img src={image} /></Col>
                <Col sm={4}></Col>
            </Row>
        </Container>
    );
}