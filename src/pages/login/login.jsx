import React from "react";
import image from "../../assets/Group.svg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
export const Login = () => {
    return (

        <div className="body">

            {/* //body */}
            <Container fluid className="div">

                {/* body interior  */}
                <Row className="div1">

                    {/* container esquerdo (vai ter apenas a foto)  */}
                    <Col sm={7}>po</Col>

                    {/* container direito (elementos do login) */}
                    <Col sm={5}>

                        {/* container logo  */}
                        <Row>

                            <Col sm={12}>col</Col>

                        </Row>

                        {/* container texto  */}
                        <Row>

                            <Col sm={12}>roe</Col>

                        </Row>

                        {/* container formulario */}
                        <Row>

                            <Col sm={12}>rol</Col>

                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}