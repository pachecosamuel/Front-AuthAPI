import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

import { useParams } from "react-router-dom";

import { FindById } from "../../Services/Api/apiFindById";

import { parseRoleToString } from "../../utils/utils";

import { ContainerTablePageStyle } from "../cadastro/style";
import { ContainerForm } from "./style";

import { AiOutlineUser } from "react-icons/ai";

import ContentPageContainer from "../../components/content-page-container";
import HeaderPageComponent from "../../components/header-page";
import { LoadingComponent } from "../../components/loading";
import { PageContainer } from "../../components/page-container/style";
import VMasker from "vanilla-masker";

export const ViewUser = () => {
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
    const params = useParams();
    const userId = params.userId;

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
                <HeaderPageComponent title='Usuário' icon={<AiOutlineUser />} />

                <ContentPageContainer>
                    {loading ?
                        <LoadingComponent />
                        :
                        <ContainerTablePageStyle>
                            <Row>
                                <Col>
                                    <ContainerForm>
                                        <Form className="form-cadastro border mb-3">
                                            <legend>Informações Pessoais</legend>

                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridFullName">
                                                    <Form.Label>Nome completo:</Form.Label>

                                                    <Form.Control
                                                        value={user.fullName}
                                                        type="text"
                                                        disabled
                                                    />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridPersonalEmail">
                                                    <Form.Label>E-mail pessoal:</Form.Label>

                                                    <Form.Control
                                                        value={user.personalEmail}
                                                        type="email"
                                                        disabled
                                                    />
                                                </Form.Group>
                                            </Row>

                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridPhone">
                                                    <Form.Label>Telefone:</Form.Label>

                                                    <Form.Control
                                                        value={user.phone === 'null' ? 'Não Possui' : VMasker.toPattern(user.phone, "(99) 99999-9999")}
                                                        disabled
                                                    />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridCpf">
                                                    <Form.Label>CPF:</Form.Label>

                                                    <Form.Control
                                                        value={VMasker.toPattern(user.cpf, "999.999.999-99")}
                                                        disabled
                                                    />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridBirthDate">
                                                    <Form.Label>Data de nascimento:</Form.Label>
                                                    <Form.Control
                                                        value={user.birthDate}
                                                        disabled
                                                        type="text"
                                                    />
                                                </Form.Group>
                                            </Row>

                                            <legend>Informações Contratuais</legend>

                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridCorporativeEmail">
                                                    <Form.Label>E-mail da empresa:</Form.Label>

                                                    <Form.Control
                                                        value={user.corporativeEmail}
                                                        type="email"
                                                        disabled
                                                    />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridAdmissionDate">
                                                    <Form.Label>Data de admissão:</Form.Label>

                                                    <Form.Control
                                                        value={user.admissionDate}
                                                        type="text"
                                                        disabled
                                                    />
                                                </Form.Group>


                                            </Row>
                                            <Row>
                                                <Form.Group as={Col} controlId="formGridRole">
                                                    <Form.Label>Nivel de acesso:</Form.Label>

                                                    <Form.Control
                                                        value={parseRoleToString(user.role)}
                                                        type="text"
                                                        disabled
                                                    />

                                                </Form.Group>

                                                <Form.Group as={Col}>
                                                    <Form.Label>Ativo:</Form.Label>

                                                    <Form.Control
                                                        value={user.active === true ? 'Sim' : 'Não'}
                                                        type="text"
                                                        disabled
                                                    />
                                                </Form.Group>
                                            </Row>

                                            <legend>Informações de Endereço</legend>

                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridCep">
                                                    <Form.Label>CEP:</Form.Label>

                                                    <Form.Control
                                                        value={user.cep}
                                                        disabled
                                                    />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridNumero">
                                                    <Form.Label>Número:</Form.Label>

                                                    <Form.Control
                                                        value={user.numero}
                                                        disabled
                                                    />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridComplemento">
                                                    <Form.Label>Complemento:</Form.Label>

                                                    <Form.Control
                                                        value={user.complemento}
                                                        disabled
                                                    />
                                                </Form.Group>
                                            </Row>

                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridRua">
                                                    <Form.Label>Rua:</Form.Label>

                                                    <Form.Control
                                                        value={user.logradouro}
                                                        disabled
                                                    />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridBairro">
                                                    <Form.Label>Bairro:</Form.Label>

                                                    <Form.Control
                                                        value={user.bairro}
                                                        disabled
                                                    />
                                                </Form.Group>
                                            </Row>

                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridCidade">
                                                    <Form.Label>Cidade:</Form.Label>

                                                    <Form.Control
                                                        value={user.cidade}
                                                        disabled
                                                    />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridEstado">
                                                    <Form.Label>Estado:</Form.Label>

                                                    <Form.Control
                                                        value={user.uf}
                                                        disabled
                                                    />


                                                </Form.Group>
                                            </Row>
                                        </Form>
                                    </ContainerForm >
                                </Col>
                            </Row>
                        </ContainerTablePageStyle>
                    }
                </ContentPageContainer>
            </PageContainer>



        </>

    )
}