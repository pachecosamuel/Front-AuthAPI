import { React, useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

import BotaoComponent from "../button";
import { ContainerForm } from "./style";
import { api, viaCep } from "../../Services/Api/apiConnection";
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
// import { LoadingComponent } from "../loading/index"

function FormularioCadastroComponent() {

    window.onbeforeunload = function () {
        localStorage.setItem('userForm', JSON.stringify({ ...userForm, cpf: '' }))
    }

    const [loadingButton, setLoadingButton] = useState(false)
    // const [loading, setLoading] = useState(true)
    const [userForm, setUserForm] = useState({
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

    useEffect(() => {
        if (userForm.cep.length === 8) {
            handleViaCep()
        }
    }, [userForm.cep])

    useEffect(() => {
        if (localStorage.getItem('userForm')) {
            setUserForm(JSON.parse(localStorage.getItem('userForm')))
        }
        // setLoading(false)
    }, [])

    const handleViaCep = async () => {
        const res = await viaCep.get(`${userForm.cep}/json/`);
        setUserForm({
            ...userForm,
            logradouro: res.data.logradouro,
            bairro: res.data.bairro,
            cidade: res.data.localidade,
            uf: res.data.uf
        })
    }

    function clearForm() {
        setUserForm({
            fullName: "",
            corporativeEmail: "",
            personalEmail: "",
            phone: "",
            cpf: "",
            role: "",
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
        
        if (localStorage.getItem('userForm')) {
            localStorage.removeItem('userForm')
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log('REGISTRANDO USUARIO')
        setLoadingButton(true)

        const userFormDateConverted = userForm
        userFormDateConverted.birthDate = userForm.birthDate.split('-').reverse().join("/")
        userFormDateConverted.admissionDate = userForm.admissionDate.split('-').reverse().join("/")

        console.log(userFormDateConverted)

        try {
            await api.post("/User", userFormDateConverted)
            toast.success('Usuário registrado com sucesso!')
            setLoadingButton(false)
            console.log('REGISTROU COM SUCESSO')
        } catch (error) {
            console.log('DEU ERRO')
            console.log(error)
            toast.error('Erro ao registrar usuário: ' + JSON.stringify(error.response.data.errors[0] ? error.response.data.errors[0].message : 'Erro no formato das datas'))
            setLoadingButton(false)
        }
    }

    return (
        <ContainerForm>
            {/* {loading ? (
                <LoadingComponent />
            ) : ( */}
            <Form className="form-cadastro border mb-3">
                <legend>Informações Pessoais</legend>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFullName">
                        <Form.Label>Nome completo:</Form.Label>

                        <Form.Control
                            value={userForm.fullName}
                            onChange={(e) => setUserForm({ ...userForm, fullName: e.target.value })}
                            type="text"
                            placeholder="Digite o nome..."
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPersonalEmail">
                        <Form.Label>E-mail pessoal:</Form.Label>

                        <Form.Control
                            value={userForm.personalEmail}
                            onChange={(e) => setUserForm({ ...userForm, personalEmail: e.target.value })}
                            type="email"
                            placeholder="Melhor e-mail do usuário"
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>Telefone:</Form.Label>

                        <Form.Control
                            value={userForm.phone}
                            onChange={(e) => setUserForm({ ...userForm, phone: e.target.value })}
                            type="text"
                            placeholder="(xx) xxxxx-xxxx"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCpf">
                        <Form.Label>CPF:</Form.Label>

                        <Form.Control
                            value={userForm.cpf}
                            onChange={(e) => setUserForm({ ...userForm, cpf: e.target.value })}
                            type="text"
                            placeholder="Digite um CPF válido"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridBirthDate">
                        <Form.Label>Data de nascimento:</Form.Label>
                        <Form.Control
                            value={userForm.birthDate}
                            onChange={(e) => setUserForm({ ...userForm, birthDate: e.target.value })}
                            type="date"
                        />
                    </Form.Group>
                </Row>

                <legend>Informações Contratuais</legend>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCorporativeEmail">
                        <Form.Label>E-mail da empresa:</Form.Label>

                        <Form.Control
                            value={userForm.corporativeEmail}
                            onChange={(e) => setUserForm({ ...userForm, corporativeEmail: e.target.value })}
                            type="email"
                            placeholder="E-mail criado para o usuário"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridAdmissionDate">
                        <Form.Label>Data de admissão:</Form.Label>

                        <Form.Control
                            value={userForm.admissionDate}
                            onChange={(e) => setUserForm({ ...userForm, admissionDate: e.target.value })}
                            type="date"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridRole">
                        <Form.Label>Nivel de acesso:</Form.Label>

                        <Form.Select
                            value={userForm.role}
                            onChange={(e) => setUserForm({ ...userForm, role: e.target.value })}
                        >
                            <option value='0'>Colaborador</option>
                            <option value='1'>Gestor</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <legend>Informações de Endereço</legend>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCep">
                        <Form.Label>CEP:</Form.Label>

                        <Form.Control
                            value={userForm.cep}
                            onChange={(e) => setUserForm({ ...userForm, cep: e.target.value })}
                            placeholder="xxxxx-xxx"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridNumero">
                        <Form.Label>Número:</Form.Label>

                        <Form.Control
                            value={userForm.numero}
                            onChange={(e) => setUserForm({ ...userForm, numero: e.target.value })}
                            placeholder="123, 123A, ..."
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridComplemento">
                        <Form.Label>Complemento:</Form.Label>

                        <Form.Control
                            value={userForm.complemento}
                            onChange={(e) => setUserForm({ ...userForm, complemento: e.target.value })}
                            placeholder="Apartamento, Bloco, ..."
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridRua">
                        <Form.Label>Rua:</Form.Label>

                        <Form.Control
                            value={userForm.logradouro}
                            onChange={(e) => setUserForm({ ...userForm, logradouro: e.target.value })}
                            placeholder=""
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridBairro">
                        <Form.Label>Bairro:</Form.Label>

                        <Form.Control
                            value={userForm.bairro}
                            onChange={(e) => setUserForm({ ...userForm, bairro: e.target.value })}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCidade">
                        <Form.Label>Cidade:</Form.Label>

                        <Form.Control
                            value={userForm.cidade}
                            onChange={(e) => setUserForm({ ...userForm, cidade: e.target.value })}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEstado">
                        <Form.Label>Estado:</Form.Label>

                        <Form.Select
                            value={userForm.uf}
                            onChange={(e) => setUserForm({ ...userForm, uf: e.target.value })}
                        >
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
                    </Form.Group>
                </Row>

                <Row>
                    <Col className="d-flex justify-content-end gap-2">
                        <BotaoComponent acao={clearForm} tamanho="10rem" bgColor="#585859" textColor="#FFF">
                            Limpar
                        </BotaoComponent>

                        {!loadingButton ? (
                            <BotaoComponent acao={handleSubmit} tamanho="10rem" bgColor="#03A688" textColor="#FFF">
                                Registrar
                            </BotaoComponent>
                        ) : (
                            <BotaoComponent disabled acao={handleSubmit} tamanho="10rem" bgColor="#03A688" textColor="#FFF">
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                            </BotaoComponent>
                        )}
                    </Col>
                </Row>
            </Form>
            {/* )} */}
        </ContainerForm >
    );
}

export default FormularioCadastroComponent;