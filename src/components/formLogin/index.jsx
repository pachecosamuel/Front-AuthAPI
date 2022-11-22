import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonComponent from "../button";
import { HiOutlineLockClosed } from "react-icons/hi";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { ContainerFormLoginStyle } from "./style";

function FormLogin({ setLogged }) {
    return (
        <ContainerFormLoginStyle>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <InputGroup className="mb-3">
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
                    <InputGroup className="mb-3">
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
                        <ButtonComponent
                            tamanho="18rem"
                            bgColor="#03A688"
                            textColor="#FFF"
                            acao={setLogged}
                        >
                            Entrar
                        </ButtonComponent>
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