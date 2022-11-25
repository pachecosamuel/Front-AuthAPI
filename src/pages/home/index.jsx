import { useEffect, useState } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { AiOutlineTable } from "react-icons/ai";

import { PageContainer } from "../../components/page-container/style";
import HeaderPageComponent from "../../components/header-page";
import ContentPageContainer from "../../components/content-page-container";
import SearchComponent from "../../components/search";
import TableComponent from "../../components/table";
import PaginationComponent from "../../components/pagination";

import { ContainerTablePageStyle } from "./style"
import { api } from "../../Services/Api/apiConnection";
import { Spinner } from "react-bootstrap";

export const Home = () => {
    
    const [loading, setLoading] = useState(false);
    const [selectValue, setSelectValue] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectValuesIsModify, setselectValuesIsModify] = useState(false);
    const [registrosFiltrados, setRegistrosFiltrados] = useState([]);
    const [registros, setRegistros] = useState([]);

    useEffect(() => {

        const handleGetUsers = async () => {
            setLoading(true)
            const res = await api.get('/User');
            setRegistros(res.data.data)
            setLoading(false)
        }
        handleGetUsers();


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
    }, [selectValue, currentPage, selectValuesIsModify]);

    function setSelectValueChange(event) {
        setSelectValue(event);
        setselectValuesIsModify(true);
    }

    function filterBySearch(value) {
        let registrosFiltrados = registros.filter(
            (r) =>
                // r.id === +value ||
                r.cpf.includes(value) ||
                r.fullName.toLowerCase().includes(value.toLowerCase()) ||
                // r.sobrenome.toLowerCase().includes(value.toLowerCase()) ||
                r.corporativeEmail.toLowerCase().includes(value.toLowerCase()) ||
                r.personalEmail.toLowerCase().includes(value.toLowerCase()) ||
                r.phone.toLowerCase().includes(value.toLowerCase()) ||
                // r.roles.toLowerCase().includes(value.toLowerCase()) ||
                r.birthDate.toLowerCase().includes(value.toLowerCase()) ||
                r.admissionDate.toLowerCase().includes(value.toLowerCase())
        );
        setCurrentPage(1);
        setRegistros(registrosFiltrados);
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
                        {
                            loading ? <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true" />  
                            : 
                            <TableComponent registros={registros} />
                        }
                            
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <PaginationComponent
                                selectValue={selectValue}
                                setSelectValueChange={setSelectValueChange}
                                registros={registros}
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