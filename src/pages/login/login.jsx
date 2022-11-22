import React from "react";
import image from "../../assets/logo.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
export const Login = () => {
    return (
        <div className="body">

            {/* //body */}
            <Container fluid className="fluid">

                {/* body interior  */}
                <Row className="div">

                    {/* container esquerdo (vai ter apenas a foto)  */}
                    <Col sm={7} className="div_esquerda"></Col>

                    {/* container direito (elementos do login) */}
                    <Col sm={5} className="div_direita">

                        {/* container logo  */}
                        <Row>

                            <Col sm={12} className="div_logo">
                                <img src={image} className="image" />
                                <span id="sigla">Life Design</span>
                                <span>Sistema de padronização de layouts T2M</span>
                            </Col>

                        </Row>

                        {/* container texto 
                        <Row className="div_text">

                            <Col sm={12}></Col>

                        </Row> */}

                        {/* container formulario */}
                        <Row className="div_button">

                            <Col sm={12}></Col>

                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}