import React from "react";
import { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import { HiOutlineLockClosed } from "react-icons/hi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { ContainerFormLoginStyle } from "./style";
import { useNavigate, } from "react-router-dom";
import { AuthenticationContext } from "../../Services/Context/contextToken";
import { Spinner } from "react-bootstrap";
import BotaoComponent from "../button";

const FormLogin = () => {
    const { login } = useContext(AuthenticationContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);
    const [loadingButton, setLoadingButton] = useState(false)
    const [validated, setValidated] = useState(false)

    let navigate = useNavigate();

    const handleLogin = async (e) => {
        setLoadingButton(true)
        e.preventDefault();
        const respostaLogin = await login(email.concat('@t2mlab.com'), password);
        if (!respostaLogin) {
            setLoadingButton(false)
            setValidated(true)
        } else {
            setLoadingButton(false)
            navigate('/');
        }
    }

    function handlePasswordIsVisible() {
        setPasswordIsVisible(!passwordIsVisible)
    }

    return (
        <ContainerFormLoginStyle>
            <Form noValidate validated={validated}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <InputGroup
                        className="mb-3"
                        onChange={(e) => setEmail(e.target.value)}
                        hasValidation
                    >
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control
                            placeholder="Digite seu e-mail"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            required
                        />
                        <InputGroup.Text id="basic-addon2">@t2mlab.com</InputGroup.Text>
                        <Form.Control.Feedback type="invalid">
                            O email deve ser preenchido
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <InputGroup
                        className="mb-3"
                        onChange={(e) => setPassword(e.target.value)}
                        hasValidation
                    >
                        <InputGroup.Text id="basic-addon1">
                            <HiOutlineLockClosed />
                        </InputGroup.Text>
                        <Form.Control
                            type={passwordIsVisible ? "text" : "password"}
                            placeholder="Digite sua senha"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            required
                        />
                        <InputGroup.Text id="basic-addon2">
                            <Button style={{ all: 'unset', cursor: 'pointer' }} onClick={handlePasswordIsVisible}>
                                {passwordIsVisible ? <BsEye /> : <BsEyeSlash />}
                            </Button>
                        </InputGroup.Text>
                        <Form.Control.Feedback type="invalid">
                            A senha deve ser preenchida
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Row>
                    <Col className="d-flex justify-content-center mt-3">
                        <BotaoComponent
                            acao={(e) => handleLogin(e)}
                            disabled={loadingButton}
                            tamanho="18rem"
                            bgColor="#03A688"
                            textColor="#FFF"
                        >
                            {loadingButton ? (
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                            ) : (
                                <span>Entrar</span>
                            )}
                        </BotaoComponent>
                    </Col>
                </Row>
                <p className="mt-3">
                    Esqueci minha senha. <a href="#">Recuperar senha</a>
                </p>
            </Form>
        </ContainerFormLoginStyle>
    );
}

export default FormLogin;