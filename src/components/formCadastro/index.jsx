import { React, useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

import BotaoComponent from "../button";
import { ContainerForm } from "./style";
import { viaCep } from "../../Services/Api/apiConnection";
import { InputGroup } from "react-bootstrap";

function FormularioCadastroComponent() {

    const [user, setUser] = useState({
        fullName: "",
        personalEmail: "",
        corporativeEmail: "",
        cpf: "",
        phone: "",
        birthDate: "",
        admissionDate: "",
        role: "",
        logradouro: "",
        bairro: "",
        numero: "",
        complemento: "",
        cidade: "",
        uf: "",
        cep: ""
    })

    useEffect(() => {
        if (user.cep.length === 8) {
            handleViaCep()
        }

        console.log(user)

    }, [user])

    const handleViaCep = async () => {
        const res = await viaCep.get(`${user.cep}/json/`);
        setUser({
            ...user,
            logradouro: res.data.logradouro,
            bairro: res.data.bairro,
            cidade: res.data.localidade,
            uf: res.data.uf
        })
    }

    // function clearForm() {
    //     setUser({
    //         fullName: "",
    //         personalEmail: "",
    //         corporativeEmail: "",
    //         cpf: "",
    //         phone: "",
    //         birthDate: "",
    //         admissionDate: "",
    //         role: "",
    //         logradouro: "",
    //         bairro: "",
    //         numero: "",
    //         complemento: "",
    //         cidade: "",
    //         uf: "",
    //         cep: ""
    //     })
    // }

    return (
        <ContainerForm>
            <Form className="form-cadastro border mb-3">
                <legend>Informações Pessoais</legend>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFullName">
                        <Form.Label>Nome completo:</Form.Label>
                        <InputGroup
                            value={user.fullName}
                            className="mb-3"
                            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                            hasValidation
                        >
                            <Form.Control type="text" placeholder="Digite o nome..." />
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPersonalEmail">
                        <Form.Label>E-mail pessoal:</Form.Label>
                        <InputGroup
                            value={user.personalEmail}
                            className="mb-3"
                            onChange={(e) => setUser({ ...user, personalEmail: e.target.value })}
                            hasValidation
                        >
                            <Form.Control type="email" placeholder="Melhor e-mail do usuário" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCorporativeEmail">
                        <Form.Label>E-mail da empresa:</Form.Label>
                        <InputGroup
                            value={user.corporativeEmail}
                            className="mb-3"
                            onChange={(e) => setUser({ ...user, corporativeEmail: e.target.value })}
                            hasValidation
                        >
                            <Form.Control type="email" placeholder="E-mail criado para o usuário" />
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCpf">
                        <Form.Label>CPF:</Form.Label>
                        <InputGroup
                            value={user.cpf}
                            className="mb-3"
                            onChange={(e) => setUser({ ...user, cpf: e.target.value })}
                            hasValidation
                        >
                            <Form.Control type="text" placeholder="Digite um CPF valido" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>Celular:</Form.Label>
                        <InputGroup
                            value={user.phone}
                            className="mb-3"
                            onChange={(e) => setUser({ ...user, phone: e.target.value })}
                            hasValidation
                        >
                            <Form.Control type="password" placeholder="(xx) xxxxx-xxxx" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridBirthDate">
                        <Form.Label>Data de nascimento:</Form.Label>
                        <InputGroup
                            value={user.birthDate}
                            className="mb-3"
                            onChange={(e) => setUser({ ...user, birthDate: e.target.value })}
                            hasValidation
                        >
                            <Form.Control type="date" />
                        </InputGroup>
                    </Form.Group>
                </Row>

                <legend>Informações Contratuais</legend>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridAdmissionDate">
                        <Form.Label>Data de admissão:</Form.Label>
                        <InputGroup
                            value={user.admissionDate}
                            className="mb-3"
                            onChange={(e) => setUser({ ...user, admissionDate: e.target.value })}
                            hasValidation
                        >
                            <Form.Control type="date" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridRole">
                        <Form.Label>Nivel de acesso:</Form.Label>
                        <InputGroup
                            value={user.role}
                            className="mb-3"
                            onChange={(e) => setUser({ ...user, role: e.target.value })}
                            hasValidation
                        >
                            <Form.Select required defaultValue="Choose...">
                                <option></option>
                                <option>Colaborador</option>
                                <option>Gestor</option>
                            </Form.Select>
                        </InputGroup>
                    </Form.Group>
                </Row>

                <legend>Informações de Endereço</legend>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridRua">
                        <Form.Label>Rua:</Form.Label>
                        <InputGroup
                            value={user.logradouro}
                            className="mb-3"
                            onChange={(e) => setUser({ ...user, logradouro: e.target.value })}
                            hasValidation
                        >
                            <Form.Control placeholder="Rua Exemplo, 123" value={user.logradouro} onChange={(e) => setUser({ ...user, logradouro: e.target.value })} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridNumero">
                        <Form.Label>Número:</Form.Label>
                        <InputGroup
                            value={user.numero}
                            className="mb-3"
                            onChange={(e) => setUser({ ...user, numero: e.target.value })}
                            hasValidation
                        >
                            <Form.Control placeholder="Rua Exemplo, 123" />
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridBairro">
                        <Form.Label>Bairro:</Form.Label>
                        <InputGroup
                            value={user.bairro}
                            className="mb-3"
                            onChange={(e) => setUser({ ...user, bairro: e.target.value })}
                            hasValidation
                        >
                            <Form.Control value={user.bairro} onChange={(e) => setUser({ ...user, bairro: e.target.value })} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridComplemento">
                        <Form.Label>Complemento:</Form.Label>
                        <InputGroup
                            value={user.complemento}
                            className="mb-3"
                            onChange={(e) => setUser({ ...user, complemento: e.target.value })}
                            hasValidation
                        >
                            <Form.Control placeholder="Apartamento, Bloco, ..." />
                        </InputGroup>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCidade">
                        <Form.Label>Cidade:</Form.Label>
                        <InputGroup
                            value={user.cidade}
                            className="mb-3"
                            onChange={(e) => setUser({ ...user, cidade: e.target.value })}
                            hasValidation
                        >
                            <Form.Control value={user.cidade} onChange={(e) => setUser({ ...user, cidade: e.target.value })} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEstado">
                        <Form.Label>Estado:</Form.Label>
                        <InputGroup
                            value={user.uf}
                            className="mb-3"
                            onChange={(e) => setUser({ ...user, uf: e.target.value })}
                            hasValidation
                        >
                            <Form.Select required defaultValue="Choose..." value={user.uf} onChange={(e) => setUser({ ...user, uf: e.target.value })}>
                                {/* <option>Escolher...</option> */}
                                <option></option>
                                <option>AC</option>
                                <option>AL</option>
                                <option>AP</option>
                                <option>AM</option>
                                <option>BA</option>
                                <option>CE</option>
                                <option>DF</option>
                                <option>ES</option>
                                <option>GO</option>
                                <option>MA</option>
                                <option>MT</option>
                                <option>MS</option>
                                <option>MG</option>
                                <option>PA</option>
                                <option>PB</option>
                                <option>PR</option>
                                <option>PE</option>
                                <option>PI</option>
                                <option>RJ</option>
                                <option>RN</option>
                                <option>RS</option>
                                <option>RO</option>
                                <option>RR</option>
                                <option>SC</option>
                                <option>SP</option>
                                <option>SE</option>
                                <option>TO</option>
                            </Form.Select>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCep">
                        <Form.Label>CEP:</Form.Label>
                        <InputGroup
                            value={user.cep}
                            className="mb-3"
                            onChange={(e) => setUser({ ...user, cep: e.target.value })}
                            hasValidation
                        >
                            <Form.Control placeholder="XXXXX-XXX" value={user.cep} onChange={(e) => setUser({ ...user, cep: e.target.value })} />
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-end gap-2">
                        <BotaoComponent tamanho="10rem" bgColor="#585859" textColor="#FFF">
                            Limpar
                        </BotaoComponent>
                        <BotaoComponent tamanho="10rem" bgColor="#03A688" textColor="#FFF">
                            Enviar
                        </BotaoComponent>
                    </Col>
                </Row>
            </Form>
        </ContainerForm>
    );
}

export default FormularioCadastroComponent;