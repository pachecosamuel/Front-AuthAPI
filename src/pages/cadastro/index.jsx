import { useEffect, useState } from "react";

import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { AiOutlineUserAdd } from 'react-icons/ai';
import { usuariosMock } from "../../assets/usuariosMock";

import { PageContainer } from "../../components/page-container/style";
import HeaderPageComponent from "../../components/header-page";
import ContentPageContainer from "../../components/content-page-container";
import SearchComponent from "../../components/search";
import TableComponent from "../../components/table";
import PaginationComponent from "../../components/pagination";
import FormularioCadastroComponent from "../../components/formCadastro";

import { ContainerTablePageStyle } from "./style"

export const Cadastro = () => {
    
    return (
        <PageContainer>
            <HeaderPageComponent title='Cadastro' icon={<AiOutlineUserAdd />} />
            
            <ContentPageContainer>
                <ContainerTablePageStyle>
                    <Row>
                        <Col>
                            <FormularioCadastroComponent />
                        </Col>
                    </Row>
                </ContainerTablePageStyle>
            </ContentPageContainer>
        </PageContainer>
    )
}