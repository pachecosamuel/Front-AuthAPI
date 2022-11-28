import './style.css';
import React, { useState } from 'react';
import { ContainerCardSimplesStyle } from './style';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import ButtonComponent from '../../button';
import Modal from 'react-bootstrap/Modal';

function PasswordCard() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //Falta consumir a Api



    return (

        <ContainerCardSimplesStyle>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Redefinir Senha</Accordion.Header>
                    <Accordion.Body >
                        <Form.Group controlId="formGridPassword">
                            <Form.Label>Senha atual</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha..." />
                        </Form.Group>
                        <Form.Group controlId="formGridPassword">
                            <Form.Label>Nova senha</Form.Label>
                            <Form.Control type="password" placeholder="Nova senha..." />
                        </Form.Group>
                        <Form.Group controlId="formGridPassword">
                            <Form.Label>Confirme sua senha</Form.Label>
                            <Form.Control type="password" placeholder="Confirme sua senha..." />
                        </Form.Group>
                        <div style={{ marginTop: "2rem" }}>
                            <ButtonComponent
                                tamanho="10rem"
                                bgColor="#01a998"
                                textColor="#FFF"
                                acao={handleShow}
                            >
                                Redefinir
                            </ButtonComponent>
                        </div>
                        <div>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Atenção</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Você tem certeza que deseja alterar sua senha?</Modal.Body>
                                <Modal.Footer>
                                    <ButtonComponent
                                        tamanho="7rem"
                                        bgColor="#585859"
                                        textColor="#FFF"
                                        acao={handleClose}
                                    > Cancelar</ButtonComponent>
                                    <ButtonComponent
                                        tamanho="10rem"
                                        bgColor="#01a998"
                                        textColor="#FFF"
                                        acao={handleClose}
                                    > Salvar Alteração</ButtonComponent>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </ContainerCardSimplesStyle>
    );
}

export default PasswordCard;