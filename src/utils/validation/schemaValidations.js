import * as yup from 'yup';
import { subtractYears } from "../utils";
import { fullNameRegex } from "./regexValidations";

export const userFormSchema = yup.object().shape({
    fullName: yup.string()
        .required('Nome completo deve ser preenchido')
        .matches(fullNameRegex, 'Nome completo não permite números ou caracteres especiais')
        .test('space-between-names', 
            'É necessário inserir pelo menos um sobrenome', 
            (x) =>  x !== undefined && x.includes(' '))
        .test('no-ending-space', 
            'Não deve haver espaços no começo ou fim do nome', 
            (x) =>  x !== undefined && (x.charAt(x.length - 1) !== ' ' && x.charAt(0) !== ' '))
        .max(80, 'O Nome completo deve possuir no máximo 80 caracteres'),
    corporativeEmail: yup.string()
        .email('Confira o padrão do e-mail inserido')
        .required('E-mail da empresa deve ser preenchido')
        .max(100, 'O E-mail da empresa deve possuir no máximo 100 caracteres'),
    personalEmail: yup.string()
        .email('Confira o padrão do e-mail inserido')
        .required('E-mail pessoal deve ser preenchido')
        .max(100, 'O E-mail pessoal deve possuir no máximo 100 caracteres'),
    phone: yup.string()
        .required('Telefone deve ser preenchido')
        .min(15, 'O Telefone deve possuir 11 dígitos'),
    cpf: yup.string()
        .required('CPF deve ser preenchido')
        .min(14, 'O CPF deve possuir 11 dígitos'),
    role: yup.number().integer()
        .required('Nível de acesso deve ser preenchido'),
    logradouro: yup.string()
        .required('Rua deve ser preenchida')
        .max(80, 'A Rua deve possuir no máximo 80 caracteres'),
    bairro: yup.string()
        .required('Bairro deve ser preenchido')
        .max(80, 'O Bairro deve possuir no máximo 80 caracteres'),
    numero: yup.string()
        .required('Número deve ser preenchido')
        .max(15, 'O Número deve possuir no máximo 15 caracteres'),
    complemento: yup.string()
        .max(80, 'O Complemento deve possuir no máximo 80 caracteres'),
    cidade: yup.string()
        .required('Cidade deve ser preenchida')
        .max(40, 'A Cidade deve possuir no máximo 40 caracteres'),
    uf: yup.string()
        .required('Estado deve ser preenchido')
        .min(2, 'O Estado deve possuir 2 caracteres')
        .max(2, 'O Estado deve possuir 2 caracteres'),
    cep: yup.string()
        .required('CEP deve ser preenchido')
        .min(9, 'O CEP deve possuir 8 dígitos'),
    birthDate: yup.date()
        .required('Data de nascimento deve ser preenchida')
        .max(subtractYears(new Date(), 14), 'O usuário deve ter mais de 14 anos de idade'),
    admissionDate: yup.date()
        .required('Data de admissão deve ser preenchida')
        .max(new Date(), 'A Data de admissão deve ser anterior à data atual')
})