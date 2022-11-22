import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ContainerStyled, HeaderStyled } from "./style"
import { CgHome } from 'react-icons/cg';

export const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm={1}>Sidebar</Col>

                <Col sm={11}>
                    <ContainerStyled>
                        <Row>
                            <HeaderStyled> <CgHome /> Home </HeaderStyled>
                        </Row>

                        <Row>
                            <Col>
                                <div>Busca</div>
                                <div>Tabela</div>
                                <div>Paginação</div>
                            </Col>
                        </Row>
                    </ContainerStyled>
                </Col>
            </Row>
        </Container>
    )
}