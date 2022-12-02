import { React, useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import { Spinner } from "react-bootstrap";

import "./formEdit.css";

import { ContainerForm } from "./style";
import BotaoComponent from "../button";

import { parseDateToPattern, subtractYears } from "../../utils/utils";
import { userFormSchema } from "../../utils/validation/schemaValidations";

import { api, viaCep } from "../../Services/Api/apiConnection";

import { toast } from "react-toastify";
import { useFormik } from "formik";
import VMasker from "vanilla-masker";
import moment from "moment";
import { useNavigate } from "react-router-dom";
moment.locale('pt-br');

function FormularioEditComponent(user) {
    
    const navigate = useNavigate();

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
        setValues,
        handleReset
    } = useFormik({
        initialValues: {
            id: user.user.id,
            fullName: user.user.fullName,
            corporativeEmail: user.user.corporativeEmail,
            personalEmail: user.user.personalEmail,
            phone: user.user.phone,
            cpf: user.user.cpf,
            role: user.user.role,
            logradouro: user.user.logradouro,
            bairro: user.user.bairro,
            numero: user.user.numero,
            complemento: user.user.complemento,
            cidade: user.user.cidade,
            uf: user.user.uf,
            cep: user.user.cep,
            birthDate:  parseDateToPattern(user.user.birthDate),
            admissionDate: parseDateToPattern(user.user.admissionDate)
        },
        validationSchema: userFormSchema,
        validateOnChange: false,
        validateOnBlur: true,
        onSubmit: (values) => {
            handleForm(values)
        }
    })

    useEffect(() => {
        if(values.cep != user.user.cep){
          values.cep.length === 9 && handleViaCep()  
        }
    }, [values.cep])

    const handleForm = async (values) => {
        setSubmitting(true)

        const cleanDataForSubmit = {
            ...values,
            phone: VMasker.toNumber(values.phone),
            cpf: VMasker.toNumber(values.cpf),
            cep: VMasker.toNumber(values.cep),
            birthDate: moment(values.birthDate).format('DD/MM/YYYY'),
            admissionDate: moment(values.admissionDate).format('DD/MM/YYYY')
        }

        try {
            console.log(cleanDataForSubmit)
            await api.put("/User", cleanDataForSubmit)
            toast.success('Usuário atualizado com sucesso!')
            setSubmitting(false)
            resetForm()
            navigate(`/user/view/${user.user.id}`)
        } catch (error) {
            setSubmitting(false)
            toast.error('Erro ao registrar usuário: ' + error.response.data.errors[0].message)
        }
    }

    const handleViaCep = async () => {
        const res = await viaCep.get(`${VMasker.toNumber(values.cep)}/json/`);
        if (res.data.erro) {
            toast.error('Nenhum endereço encontrado para o CEP inserido')
        } else {
            setValues({
                ...values,
                logradouro: res.data.logradouro,
                bairro: res.data.bairro,
                cidade: res.data.localidade,
                uf: res.data.uf
            })
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
                            placeholder="Ex: João Silva"
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
                            placeholder="Ex: usuario@mail.com"
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
                    <Form.Group as={Col}>
                        <Form.Label>Telefone:</Form.Label>

                        <Form.Control
                            value={VMasker.toPattern(values.phone, "(99) 99999-9999")}
                            type="text"
                            placeholder="Ex: (00) 00000-0000"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="phone"
                            className={touched.phone && errors.phone ? "error" : null}
                        />
                        {touched.phone && errors.phone ? (
                            <div className="error-message">{errors.phone}</div>
                        ) : null}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCpf">
                        <Form.Label>CPF:</Form.Label>

                        <Form.Control
                            value={VMasker.toPattern(values.cpf, "999.999.999-99")}
                            type="text"
                            placeholder="Ex: 000.000.000-00"
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
                            max={moment(subtractYears(new Date(), 14)).format('YYYY-MM-DD')}
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
                            placeholder="Ex: usuario@t2m.com"
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
                            max={moment(new Date()).format('YYYY-MM-DD')}
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
                            <option value='0'>Colaborador</option>
                            <option value='1'>Departamento Administrativo</option>
                            <option value='3'>Gestor</option>
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
                            value={VMasker.toPattern(values.cep, "99999-999")}
                            placeholder="Ex: 00000-000"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='cep'
                            autoComplete="off"
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
                            placeholder="Ex: 100, 100A, ..."
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
                            placeholder="Ex: Apt 101, Bloco A, ..."
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
                            placeholder="Ex: Rua Afrânio Melo Franco"
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
                            placeholder="Ex: Quitandinha"
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
                            placeholder="Ex: Petrópolis"
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
                    <Col className="d-flex justify-content-end gap-2 buttons-container">
                        <BotaoComponent acao={handleReset} tamanho="10rem" bgColor="#585859" textColor="#FFF">
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

export default FormularioEditComponent;