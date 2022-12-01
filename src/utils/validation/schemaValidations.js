import * as yup from 'yup';
import { subtractYears } from "../utils";
import { noNumbersRegex } from "./regexValidations";

export const userFormSchema = yup.object().shape({
    fullName: yup.string().required('Nome completo deve ser preenchido').matches(noNumbersRegex, 'Nome completo não permite números'),
    corporativeEmail: yup.string().email('Confira o padrão do email inserido').required('E-mail da empresa deve ser preenchido'),
    personalEmail: yup.string().email('Confira o padrão do email inserido').required('E-mail pessoal deve ser preenchido'),
    phone: yup.string().required('Telefone deve ser preenchido'),
    cpf: yup.string().required('CPF deve ser preenchido'),
    role: yup.number().integer().required('Nível de acesso deve ser preenchido'),
    logradouro: yup.string().required('Rua deve ser preenchida'),
    bairro: yup.string().required('Bairro deve ser preenchido'),
    numero: yup.string().required('Número deve ser preenchido'),
    complemento: yup.string(),
    cidade: yup.string().required('Cidade deve ser preenchida'),
    uf: yup.string().required('Estado deve ser preenchido'),
    cep: yup.string().required('CEP deve ser preenchido'),
    birthDate: yup.date().max(subtractYears(new Date(), 18), 'O usuário deve ter mais de 18 anos de idade').required('Data de nascimento deve ser preenchida'),
    admissionDate: yup.date().max(new Date(), 'A Data de admissão deve ser anterior à data atual').required('Data de admissão deve ser preenchida')
})