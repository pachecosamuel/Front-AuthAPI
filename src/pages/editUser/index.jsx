import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CiEdit } from "react-icons/ci";
import { useParams } from "react-router-dom";
import ContentPageContainer from "../../components/content-page-container";
import HeaderPageComponent from "../../components/header-page";
import { LoadingComponent } from "../../components/loading";
import { PageContainer } from "../../components/page-container/style";
import { FindById } from "../../Services/Api/apiFindById";
import { ContainerTablePageStyle } from "../home/style";

export const EditUser = () => {
    const params = useParams();
    const userId = params.userId;

    const [user, setUser] = useState({
        fullName: "",
        corporativeEmail: "",
        personalEmail: "",
        phone: "",
        cpf: "",
        role: 0,
        logradouro: "",
        bairro: "",
        numero: "",
        complemento: "",
        cidade: "",
        uf: "",
        cep: "",
        birthDate: "",
        admissionDate: ""
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const Find = async (id) => {
            const result = await FindById(id);
            setUser(result.data.data);
            setLoading(false);
        };
        Find(userId);


    }, [])

    return (
        <>
            <PageContainer>
                <HeaderPageComponent title='Editar Usuário' icon={<CiEdit />} />

                <ContentPageContainer>
                    {loading ?
                        <LoadingComponent/>
                        :
                        <ContainerTablePageStyle>
                            <Row>
                                <Col>
                                    
                                        {user.fullName}
                                    
                                </Col>
                            </Row>
                        </ContainerTablePageStyle>
                    }
                        
                </ContentPageContainer>
            </PageContainer>
        </>

    )
}