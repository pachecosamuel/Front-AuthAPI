import { useEffect, useState } from "react";

import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { CgHome } from 'react-icons/cg';
import { usuariosMock } from "../../assets/usuariosMock";

import { PageContainer } from "../../components/page-container/style";
import HeaderPageComponent from "../../components/header-page";
import ContentPageContainer from "../../components/content-page-container";
import SearchComponent from "../../components/search";
import TableComponent from "../../components/table";
import PaginationComponent from "../../components/pagination";

import { ContainerTablePageStyle } from "./style"

export const Home = () => {
    const [selectValue, setSelectValue] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectValuesIsModify, setselectValuesIsModify] = useState(false);
    const [registrosFiltrados, setRegistrosFiltrados] = useState([]);
    const [registros, setRegistros] = useState(usuariosMock);
    const registrosJson = usuariosMock;

    useEffect(() => {
        let page = currentPage;
        if (selectValuesIsModify) {
            page = 1;
            setCurrentPage(1);
            setselectValuesIsModify(false);
        }

        let filtrados = registros.slice(
            (page - 1) * selectValue,
            +selectValue * page
        );
        setRegistrosFiltrados(filtrados);
        setSelectValue(+selectValue);
    }, [selectValue, registros, currentPage, selectValuesIsModify]);

    function setSelectValueChange(event) {
        setSelectValue(event);
        setselectValuesIsModify(true);
    }

    function filterBySearch(value) {
        let registrosFiltrados = registrosJson.filter(
            (r) =>
                r.id === +value ||
                r.nome.toLowerCase().includes(value.toLowerCase()) ||
                r.sobrenome.toLowerCase().includes(value.toLowerCase()) ||
                r.email.toLowerCase().includes(value.toLowerCase())
        );
        setRegistros(registrosFiltrados);
    }

    return (
        <Container fluid>
            <Row>
                <Col sm={1}>Sidebar</Col>

                <Col sm={11}>
                    <PageContainer>
                        <HeaderPageComponent title='Início' icon={<CgHome />} />

                        <ContentPageContainer>
                            <ContainerTablePageStyle>
                                <Row>
                                    <Col>
                                        <SearchComponent filterBySearch={filterBySearch} />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <TableComponent registros={registrosFiltrados} />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <PaginationComponent
                                            selectValue={selectValue}
                                            setSelectValueChange={setSelectValueChange}
                                            registrosJson={registros}
                                            currentPage={currentPage}
                                            setCurrentPage={setCurrentPage}
                                        />
                                    </Col>
                                </Row>
                            </ContainerTablePageStyle>
                        </ContentPageContainer>
                    </PageContainer>
                </Col>
            </Row>
        </Container>
    )
}