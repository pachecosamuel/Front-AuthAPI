import './style.css';
import React, { useState } from 'react';
import { ContainerCardSimplesStyle } from './style';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import ButtonComponent from '../../button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { UpdatePassword } from '../../../Services/Api/updatePassword';
import { Spinner } from 'react-bootstrap';


function PasswordCard({ user }) {
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [validated, setValidated] = useState(false)
    const [loadingButton, setLoadingButton] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = (e) => {
        e.preventDefault();
        setValidated(true)
        if (password === "" || newPassword === "" || passwordConfirm == "") toast.error("Preencha todos os campos")
        else if (newPassword === passwordConfirm)
            setShow(true);
        else
            toast.error("As senhas devem ser iguais")
    }

    const handleSuccess = async (e) => {
        e.preventDefault();
        setLoadingButton(true);
        const result = await UpdatePassword(user.personalEmail, password, newPassword);
        console.log(result);
        if (result) {
            toast.success("Senha redefinida com sucesso")
            setShow(false);
            setPassword("");
            setNewPassword("");
            setPasswordConfirm("")
            setValidated(false)
            setLoadingButton(false);
        } else {
            setShow(false);
            setPassword("");
            setNewPassword("");
            setPasswordConfirm("");
            setValidated(false)
            setLoadingButton(false);
        }

    }
    return (

        <ContainerCardSimplesStyle>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Redefinir Senha</Accordion.Header>
                    <Accordion.Body >
                        <Form className='form' noValidate validated={validated} >
                            <Form.Group controlId="formGridPassword">
                                <Form.Label>Senha atual</Form.Label>
                                <Form.Control autoComplete='on' type="password" placeholder="Digite sua senha..."
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formGridPassword1">
                                <Form.Label>Nova senha</Form.Label>
                                <Form.Control autoComplete='on' type="password" placeholder="Nova senha..." value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                            </Form.Group>
                            <Form.Group controlId="formGridPassword2" >
                                <Form.Label>Confirme sua senha</Form.Label>
                                <Form.Control autoComplete='on' type="password" placeholder="Confirme sua senha..." value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} required />
                            </Form.Group>
                        </Form>
                        <div style={{ marginTop: "2rem" }}>
                            <ButtonComponent
                                tamanho="5rem"
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
                                    {!loadingButton ?
                                        <ButtonComponent
                                            tamanho="10rem"
                                            bgColor="#01a998"
                                            textColor="#FFF"
                                            acao={(e) => handleSuccess(e)}
                                        > Salvar Alteração</ButtonComponent>
                                        :
                                        <ButtonComponent
                                            tamanho="10rem"
                                            bgColor="#01a998"
                                            textColor="#FFF"
                                            disabled

                                        >
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                        </ButtonComponent>
                                    }

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