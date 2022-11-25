import React, { useState } from "react";
import image from "../../assets/logo.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormLogin from "../../components/formLogin";
import './style.css';
import { LoadingComponent } from "../../components/loading";

export const Login = () => {

    return (
        <>
            {/* //body */}
            <Container fluid className="fluid">

                {/* body interior  */}
                <Row>

                    {/* container esquerdo (vai ter apenas a foto)  */}
                    <Col sm={7} className="div_esquerda"></Col>

                    {/* container direito (elementos do login) */}
                    <Col sm={5} className="div_direita">

                        {/* container logo  */}
                        <Row>

                            <Col className="div_logo">
                                <img src={image} className="image" />
                                <span id="sigla">Controle de Acesso</span>
                                <span>Sistema de controle de acesso de usuários T2M</span>
                            </Col>

                        </Row>

                        <Row className="mt-2" >

                            <Col sm={12}><FormLogin /></Col>

                        </Row>
                    </Col>
                </Row>

            </Container>
        </>
    );
}