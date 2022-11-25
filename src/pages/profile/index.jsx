import React from "react";
import { PageContainer } from "../../components/page-container/style";
import ContentPageContainer from "../../components/content-page-container";
import HeaderPageComponent from "../../components/header-page";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddressCard from "../../components/profileCard/addressCard";
import { BiUserCircle } from "react-icons/bi";
import InformationCard from "../../components/profileCard/informationCard/index";

export function Profile() {
    return (
        <PageContainer>
            <HeaderPageComponent title='Perfil' icon={<BiUserCircle />} />

            <ContentPageContainer>
                <Row>
                    <Col>
                        <InformationCard />
                        <hr />
                        <AddressCard />
                    </Col>
                </Row>
            </ContentPageContainer>
        </PageContainer>
    );
}