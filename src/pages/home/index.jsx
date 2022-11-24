import { useContext, useEffect, useState } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { AiOutlineTable } from "react-icons/ai";
import { usuariosMock } from "../../assets/usuariosMock";

import { PageContainer } from "../../components/page-container/style";
import HeaderPageComponent from "../../components/header-page";
import ContentPageContainer from "../../components/content-page-container";
import SearchComponent from "../../components/search";
import TableComponent from "../../components/table";
import PaginationComponent from "../../components/pagination";
import { AuthenticationContext } from "../../Services/Context/contextToken";
import { ContainerTablePageStyle } from "./style"

export const Home = () => {
    const [selectValue, setSelectValue] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectValuesIsModify, setselectValuesIsModify] = useState(false);
    const [registrosFiltrados, setRegistrosFiltrados] = useState([]);
    const [registros, setRegistros] = useState(usuariosMock);
    const registrosJson = usuariosMock;
    const { user } = useContext(AuthenticationContext);


    useEffect(() => {
        console.log('====================================');
        console.log("dentro da home");
        console.log(user);
        console.log('====================================');
    }, [])

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
                // r.id === +value ||
                r.cpf.includes(value) ||
                r.nome.toLowerCase().includes(value.toLowerCase()) ||
                // r.sobrenome.toLowerCase().includes(value.toLowerCase()) ||
                r.email1.toLowerCase().includes(value.toLowerCase()) ||
                r.email2.toLowerCase().includes(value.toLowerCase()) ||
                r.phone.toLowerCase().includes(value.toLowerCase()) ||
                // r.roles.toLowerCase().includes(value.toLowerCase()) ||
                r.birthDate.toLowerCase().includes(value.toLowerCase()) ||
                r.admissionDate.toLowerCase().includes(value.toLowerCase())
        );
        setCurrentPage(prevstate => 1);
        setRegistros(registrosFiltrados);
    }

    const [logged, setLogged] = useState(false);
    function logOut() {
        setLogged(false);
    }

    return (
        <PageContainer>
            <HeaderPageComponent title='Controle de Acesso' icon={<AiOutlineTable />} />

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
    )
}