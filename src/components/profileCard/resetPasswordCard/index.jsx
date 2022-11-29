import './style.css';
import React, { useState } from 'react';
import { ContainerCardSimplesStyle } from './style';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import ButtonComponent from '../../button';
import Modal from 'react-bootstrap/Modal';

function PasswordCard() {
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const handleClose = () => setShow(false);
    const [validated, setValidated] = useState(false)



    const handleShow = (e) => {
        e.preventDefault();
        setValidated(true)
        setShow(true);
        console.log("senha : " + password);
        console.log("newsenha : " + newPassword);
        console.log("confirsenha : " + passwordConfirm);
    }




    //Falta consumir a Api



    return (

        <ContainerCardSimplesStyle>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Redefinir Senha</Accordion.Header>
                    <Accordion.Body >
                        <Form noValidate validated={validated}>
                            <Form.Group controlId="formGridPassword">
                                <Form.Label>Senha atual</Form.Label>
                                <Form.Control type="password" placeholder="Digite sua senha..."
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formGridPassword">
                                <Form.Label>Nova senha</Form.Label>
                                <Form.Control type="password" placeholder="Nova senha..." value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                            </Form.Group>
                            <Form.Group controlId="formGridPassword" >
                                <Form.Label>Confirme sua senha</Form.Label>
                                <Form.Control type="password" placeholder="Confirme sua senha..." value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} required />
                            </Form.Group>
                        </Form>
                        <div style={{ marginTop: "2rem" }}>
                            <ButtonComponent
                                tamanho="10rem"
                                bgColor="#01a998"
                                textColor="#FFF"
                                acao={(e) => handleShow(e)}
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