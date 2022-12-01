import { React, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import { Spinner } from "react-bootstrap";

import "./formCadastro.css";

import { api, viaCep } from "../../Services/Api/apiConnection";

import { ContainerForm } from "./style";
import BotaoComponent from "../button";

import { toast } from "react-toastify";
import { useFormik } from "formik";
import { userFormSchema } from "../../utils/validation/schemaValidations";

function FormularioCadastroComponent() {

    window.onbeforeunload = function () {
        localStorage.setItem('registerUserformData', JSON.stringify({ ...values, cpf: '' }))
    }

    const {
        values,
        errors,
        touched,
        isSubmitting,
        setSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
        resetForm,
        setValues
    } = useFormik({
        initialValues: {
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
        },
        validationSchema: userFormSchema,
        validateOnChange: false,
        validateOnBlur: true,
        onSubmit: (values) => {
            console.log('DENTRO DO ONSUBMIT')
            console.log(values)
            setSubmitting(true)
            handleForm(values)
            resetForm()
            setSubmitting(false)
        }
    })

    useEffect(() => {
        if (localStorage.getItem('registerUserformData')) {
            setValues(JSON.parse(localStorage.getItem('registerUserformData')))
        }
    }, [])

    useEffect(() => {
        if (values.cep.length === 8) {
            handleViaCep()
        }
    }, [values.cep])

    const handleForm = async (values) => {
        console.log('REGISTRANDO USUARIO')
        console.log(values)

        console.log('ANTES DE CONVERTER DATA')
        const userDateConverted = values

        userDateConverted.birthDate = values.birthDate.split('-').reverse().join("/")
        userDateConverted.admissionDate = values.admissionDate.split('-').reverse().join("/")

        console.log('DEPOIS DE CONVERTER DATA')
        console.log(userDateConverted)

        try {
            await api.post("/User", values)
            toast.success('Usuário registrado com sucesso!')
            console.log('REGISTROU COM SUCESSO')
        } catch (error) {
            console.log('DEU ERRO')
            console.log(error)
            // toast.error('Erro ao registrar usuário: ' + JSON.stringify(error.response.data.errors[0] ? error.response.data.errors[0].message : 'Erro no formato das datas'))
            toast.error('Erro ao registrar usuário: ')
        }
    }

    const handleViaCep = async () => {
        const res = await viaCep.get(`${values.cep}/json/`);
        setValues({
            ...values,
            logradouro: res.data.logradouro,
            bairro: res.data.bairro,
            cidade: res.data.localidade,
            uf: res.data.uf
        })
    }

    function clearForm() {
        resetForm()
        if (localStorage.getItem('registerUserformData')) {
            localStorage.removeItem('registerUserformData')
        }
    }

    return (
        <ContainerForm>
            <Form onSubmit={handleSubmit} className="form-cadastro border mb-3">
                <legend>Informações Pessoais</legend>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFullName">
                        <Form.Label>Nome completo:</Form.Label>

                        <Form.Control
                            value={values.fullName}
                            type="text"
                            placeholder="Digite o nome..."
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name='fullName'
                            className={touched.fullName && errors.fullName ? "error" : null}
                        />
                        {touched.fullName && errors.fullName ? (
                            <div className="error-message">{errors.fullName}</div>
                        ) : null}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPersonalEmail">
                        <Form.Label>E-mail pessoal:</Form.Label>

                        <Form.Control
                            value={values.personalEmail}
                            type="email"
                            placeholder="Melhor e-mail do usuário"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='personalEmail'
                            className={touched.personalEmail && errors.personalEmail ? "error" : null}
                        />
                        {touched.personalEmail && errors.personalEmail ? (
                            <div className="error-message">{errors.personalEmail}</div>
                        ) : null}
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>Telefone:</Form.Label>

                        <Form.Control
                            value={values.phone}
                            type="text"
                            placeholder="(xx) xxxxx-xxxx"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='phone'
                            className={touched.phone && errors.phone ? "error" : null}
                        />
                        {touched.phone && errors.phone ? (
                            <div className="error-message">{errors.phone}</div>
                        ) : null}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCpf">
                        <Form.Label>CPF:</Form.Label>

                        <Form.Control
                            value={values.cpf}
                            type="text"
                            placeholder="Digite um CPF válido"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='cpf'
                            className={touched.cpf && errors.cpf ? "error" : null}
                        />
                        {touched.cpf && errors.cpf ? (
                            <div className="error-message">{errors.cpf}</div>
                        ) : null}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridBirthDate">
                        <Form.Label>Data de nascimento:</Form.Label>
                        <Form.Control
                            value={values.birthDate}
                            type="date"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='birthDate'
                            className={touched.birthDate && errors.birthDate ? "error" : null}
                        />
                        {touched.birthDate && errors.birthDate ? (
                            <div className="error-message">{errors.birthDate}</div>
                        ) : null}
                    </Form.Group>
                </Row>

                <legend>Informações Contratuais</legend>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCorporativeEmail">
                        <Form.Label>E-mail da empresa:</Form.Label>

                        <Form.Control
                            value={values.corporativeEmail}
                            type="email"
                            placeholder="E-mail criado para o usuário"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='corporativeEmail'
                            className={touched.corporativeEmail && errors.corporativeEmail ? "error" : null}
                        />
                        {touched.corporativeEmail && errors.corporativeEmail ? (
                            <div className="error-message">{errors.corporativeEmail}</div>
                        ) : null}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridAdmissionDate">
                        <Form.Label>Data de admissão:</Form.Label>

                        <Form.Control
                            value={values.admissionDate}
                            type="date"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='admissionDate'
                            className={touched.admissionDate && errors.admissionDate ? "error" : null}
                        />
                        {touched.admissionDate && errors.admissionDate ? (
                            <div className="error-message">{errors.admissionDate}</div>
                        ) : null}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridRole">
                        <Form.Label>Nível de acesso:</Form.Label>

                        <Form.Select
                            value={values.role}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='role'
                            className={touched.role && errors.role ? "error" : null}
                        >
                            <option></option>
                            <option value='0'>Colaborador</option>
                            <option value='1'>Gestor</option>
                        </Form.Select>
                        {touched.role && errors.role ? (
                            <div className="error-message">{errors.role}</div>
                        ) : null}
                    </Form.Group>
                </Row>

                <legend>Informações de Endereço</legend>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCep">
                        <Form.Label>CEP:</Form.Label>

                        <Form.Control
                            value={values.cep}
                            placeholder="xxxxx-xxx"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='cep'
                            className={touched.cep && errors.cep ? "error" : null}
                        />
                        {touched.cep && errors.cep ? (
                            <div className="error-message">{errors.cep}</div>
                        ) : null}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridNumero">
                        <Form.Label>Número:</Form.Label>

                        <Form.Control
                            value={values.numero}
                            placeholder="123, 123A, ..."
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='numero'
                            className={touched.numero && errors.numero ? "error" : null}
                        />
                        {touched.numero && errors.numero ? (
                            <div className="error-message">{errors.numero}</div>
                        ) : null}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridComplemento">
                        <Form.Label>Complemento:</Form.Label>

                        <Form.Control
                            value={values.complemento}
                            placeholder="Apartamento, Bloco, ..."
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='complemento'
                            className={touched.complemento && errors.complemento ? "error" : null}
                        />
                        {touched.complemento && errors.complemento ? (
                            <div className="error-message">{errors.complemento}</div>
                        ) : null}
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridRua">
                        <Form.Label>Rua:</Form.Label>

                        <Form.Control
                            value={values.logradouro}
                            placeholder=""
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='logradouro'
                            className={touched.logradouro && errors.logradouro ? "error" : null}
                        />
                        {touched.logradouro && errors.logradouro ? (
                            <div className="error-message">{errors.logradouro}</div>
                        ) : null}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridBairro">
                        <Form.Label>Bairro:</Form.Label>

                        <Form.Control
                            value={values.bairro}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='bairro'
                            className={touched.bairro && errors.bairro ? "error" : null}
                        />
                        {touched.bairro && errors.bairro ? (
                            <div className="error-message">{errors.bairro}</div>
                        ) : null}
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCidade">
                        <Form.Label>Cidade:</Form.Label>

                        <Form.Control
                            value={values.cidade}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='cidade'
                            className={touched.cidade && errors.cidade ? "error" : null}
                        />
                        {touched.cidade && errors.cidade ? (
                            <div className="error-message">{errors.cidade}</div>
                        ) : null}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEstado">
                        <Form.Label>Estado:</Form.Label>

                        <Form.Select
                            value={values.uf}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='uf'
                            className={touched.uf && errors.uf ? "error" : null}
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
                        {touched.uf && errors.uf ? (
                            <div className="error-message">{errors.uf}</div>
                        ) : null}
                    </Form.Group>
                </Row>

                <Row>
                    <Col className="d-flex justify-content-end gap-2">
                        <BotaoComponent acao={clearForm} tamanho="10rem" bgColor="#585859" textColor="#FFF">
                            Limpar
                        </BotaoComponent>

                        <BotaoComponent disabled={isSubmitting} type='submit' tamanho="10rem" bgColor="#03A688" textColor="#FFF">
                            {isSubmitting ? (
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                            ) : (
                                <span>
                                    Registrar
                                </span>
                            )}
                        </BotaoComponent>
                    </Col>
                </Row>
            </Form>
        </ContainerForm>
    );
}

export default FormularioCadastroComponent;