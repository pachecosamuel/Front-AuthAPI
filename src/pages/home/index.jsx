import { useEffect, useState } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { HiOutlineClipboardList } from "react-icons/hi";
import { FiFilter, FiUser } from "react-icons/fi";

import { PageContainer } from "../../components/page-container/style";
import HeaderPageComponent from "../../components/header-page";
import ContentPageContainer from "../../components/content-page-container";
import SearchComponent from "../../components/search";
import TableComponent from "../../components/table";
import PaginationComponent from "../../components/pagination";

import { ContainerTablePageStyle } from "./style"
import { api } from "../../Services/Api/apiConnection";
import { Form, InputGroup, Spinner } from "react-bootstrap";
import ButtonComponent from "../../components/button";
import { parseRoleToString } from "../../utils/utils";

export const Home = () => {

    const [loading, setLoading] = useState(false);
    const [selectValue, setSelectValue] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectValuesIsModify, setselectValuesIsModify] = useState(false);
    const [registrosFiltrados, setRegistrosFiltrados] = useState([]);
    const [registros, setRegistros] = useState([]);
    const [users, setUsers] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [tableIsModify, setTableIsModify] = useState(false);

    const [buttonAll, setButtonAll] = useState('todos');
    const [buttonUsers, setButtonUsers] = useState([]);

    useEffect(() => {

        const handleGetUsers = async () => {
            setLoading(true)
            const res = await api.get('/User');
            let listaOrdenada = res.data.data;
            listaOrdenada.sort((x, y)=>{
                let a = x.fullName.toUpperCase()
                let b = y.fullName.toUpperCase()
                return a==b ? 0 : a > b ? 1 : -1;
            })
            setUsers(listaOrdenada)
            setButtonUsers(listaOrdenada)
            setLoading(false)
        }
        if (!isSearching) {
            handleGetUsers();
        }



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
    }, [selectValue, currentPage, selectValuesIsModify, registros, tableIsModify, buttonAll]);

    function setSelectValueChange(event) {
        setSelectValue(event);
        setselectValuesIsModify(true);
    }

    function filterBySearch(value) {
        let registrosFiltrados = users.filter(
            (r) =>
                // r.id === +value ||
                r.cpf.includes(value) ||
                r.fullName.toLowerCase().includes(value.toLowerCase()) ||
                // r.sobrenome.toLowerCase().includes(value.toLowerCase()) ||
                r.corporativeEmail.toLowerCase().includes(value.toLowerCase()) ||
                r.personalEmail.toLowerCase().includes(value.toLowerCase()) ||
                r.phone.toLowerCase().includes(value.toLowerCase()) ||
                parseRoleToString(r.role).toLowerCase().includes(value.toLowerCase()) ||
                r.birthDate.toLowerCase().includes(value.toLowerCase()) ||
                r.admissionDate.toLowerCase().includes(value.toLowerCase())
        );
        setCurrentPage(1);
        if (buttonAll != 'true' && buttonAll != 'false') {
            setRegistros(registrosFiltrados);

        } else {
            setRegistros(registrosFiltrados.filter(
                (r) =>
                    r.active === (buttonAll === 'true' ? true : false)
            ))
        }

        setIsSearching(true);
    }

    function filterButton(activeU) {
        if (activeU != 'true' && activeU != 'false') {
            setRegistros(users);
        } else {
            setRegistros(users.filter(
                (r) =>
                    r.active === (activeU === 'true' ? true : false)
            ))
        }
        setButtonAll(activeU)
        setCurrentPage(1)
        setIsSearching(true)
    }

    return (
        <PageContainer>
            <HeaderPageComponent title='Controle de Acesso' icon={<HiOutlineClipboardList />} />

            <ContentPageContainer>
                <ContainerTablePageStyle>

                    <Row>
                        <Col sm={8}>
                            <SearchComponent filterBySearch={filterBySearch} />
                        </Col>
                        <Col>
                            <Form.Group>
                            <InputGroup>
                            <InputGroup.Text><FiFilter title="Filtro"/></InputGroup.Text>
                                

                                <Form.Select
                                    value={buttonAll}
                                    onChange={(e) => filterButton(e.target.value)}
                                >

                                    <option value='todos'>Todos os Usuários</option>
                                    <option value='true'>Usuários Ativos</option>
                                    <option value='false'>Usuários Inativos</option>
                                </Form.Select>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            {
                                loading ?

                                    <div style={{
                                        height: '10vh',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <span>
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            /> Carregando...
                                        </span>
                                    </div>
                                    :
                                    <TableComponent registros={
                                        isSearching ?
                                            registrosFiltrados
                                            :
                                            users.slice(
                                                (currentPage - 1) * selectValue,
                                                +selectValue * currentPage
                                            )}
                                        setUpdateTable={setTableIsModify}
                                        updateTable={tableIsModify}
                                        setCurrentPage={setCurrentPage}
                                        setButtonAll={setButtonAll}
                                        setIsSearching={setIsSearching}
                                    />
                            }

                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <PaginationComponent
                                selectValue={selectValue}
                                setSelectValueChange={setSelectValueChange}
                                registros={isSearching ? registros : users}
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