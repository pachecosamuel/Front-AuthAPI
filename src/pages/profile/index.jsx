import { AuthenticationContext } from "../../Services/Context/contextToken";
import { PageContainer } from "../../components/page-container/style";
import ContentPageContainer from "../../components/content-page-container";
import HeaderPageComponent from "../../components/header-page";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddressCard from "../../components/profileCard/addressCard";
import { BiUserCircle } from "react-icons/bi";
import InformationCard from "../../components/profileCard/informationCard/index";
import React, { useContext, useEffect, useState } from 'react';
import { FindById } from "../../Services/Api/apiFindById";
import { Await } from "react-router-dom";
export function Profile() {

    const { user } = useContext(AuthenticationContext);
    const [newUser, setNewUser] = useState({});
    useEffect(() => {
        Find(user.id, user.token);
    }, []);

    const Find = async (id, token) => {
        const result = await FindById(id, token);
        setNewUser(result.data.data);
    };
    return (
        <PageContainer>
            <HeaderPageComponent title='Perfil' icon={<BiUserCircle />} />

            <ContentPageContainer>
                <Row>
                    <Col>
                        <InformationCard user={newUser} />
                        <hr />
                        <AddressCard user={newUser} />
                    </Col>
                </Row>
            </ContentPageContainer>
        </PageContainer>
    );
}