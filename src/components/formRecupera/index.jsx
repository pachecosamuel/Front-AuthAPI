import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonComponent from "../button";
import { HiOutlineLockClosed } from "react-icons/hi";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { ContainerFormRecuperaStyle } from "./style";

function FormRecupera({ setLogged }) {
    return (
        <ContainerFormRecuperaStyle>
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
                            placeholder="Digite sua nova senha"
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
                            Salvar
                        </ButtonComponent>
                    </Col>
                    <Col className="d-flex justify-content-center mt-3">
                        <ButtonComponent
                            tamanho="18rem"
                            bgColor="#585859"
                            textColor="#FFF"
                        >
                            Cancelar
                        </ButtonComponent>
                    </Col>
                </Row>
                <p className="mt-3">
                    Não consegue fazer alteração? <a href="#">Tentar outra forma</a>
                </p>
                
            </Form>
        </ContainerFormRecuperaStyle>
    );
}

export default FormRecupera;