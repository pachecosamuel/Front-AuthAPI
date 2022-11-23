import React from "react";
import { useState, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import { HiOutlineLockClosed } from "react-icons/hi";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { ContainerFormLoginStyle, BotaoStyle } from "./style";
import { useNavigate, } from "react-router-dom";
import { AuthenticationContext } from "../../Services/Context/contextToken";
import { Alert } from "bootstrap";



const FormLogin = () => {
    const { login, user } = useContext(AuthenticationContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log("Email : ", email.concat('@t2mlab.com'), "Senha :", password);

        const respostaLogin = await login(email.concat('@t2mlab.com'), password);
        if (!respostaLogin) {
            alert(
                "Erro",
                "",
                [
                    { text: "Ok" },
                    { text: "Não foi possivel fazer o login" }
                ]

            );
        } else {

            navigate('/home');
            alert("Login realizado com sucesso")
            console.log("Login realizado com sucesso");
            console.log(user);

        }
    }

    const handleLogin1 = async (e) => {
        e.preventDefault();
        alert("Logou");
    }


    return (
        <ContainerFormLoginStyle>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <InputGroup className="mb-3" onChange={(e) => setEmail(e.target.value)}>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control
                            placeholder="Digite seu e-mail"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">@t2mlab.com</InputGroup.Text>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <InputGroup className="mb-3" onChange={(e) => setPassword(e.target.value)}>
                        <InputGroup.Text id="basic-addon1">
                            <HiOutlineLockClosed />
                        </InputGroup.Text>
                        <Form.Control
                            type="password"
                            placeholder="Digite sua senha"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">
                            <BsEyeSlash />
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>
                <Row>
                    <Col className="d-flex justify-content-center mt-3">
                        <Button
                            style={{
                                BotaoStyle, width: "18rem",
                                backgroundColor: "#03A688",
                                border: "none"
                            }}
                            onClick={(e) => handleLogin(e)}
                        >Entrar </Button>
                    </Col>
                </Row>
                <p className="mt-3">
                    Esqueci minha senha. <a href="#">Recuperar senha</a>
                </p>
            </Form>
        </ContainerFormLoginStyle >
    );
}

export default FormLogin;