import { React } from "react";
import Table from "react-bootstrap/Table";

import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

import { ContainerTable } from "./style";

function TableComponent({ registros }) {
    return (
        <ContainerTable>
            <div className="table-area">
                <Table hover>
                    <thead>
                        <tr>
                            <th>CPF</th>
                            <th>Nome</th>
                            <th>Email Empresarial</th>
                            <th>Email Pessoal</th>
                            <th>Telefone</th>
                            <th>Data de Nascimento</th>
                            <th>Data de Admissão</th>
                            <th colSpan="2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registros.length > 0 ? (
                            registros.map((r, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{r.cpf}</td>
                                        <td>{r.nome}</td>
                                        <td>{r.email1}</td>
                                        <td>{r.email2}</td>
                                        <td>{r.phone}</td>
                                        <td>{r.birthDate}</td>
                                        <td>{r.admissionDate}</td>
                                        <td className="coluna-acao">
                                            <CiEdit />
                                        </td>
                                        <td className="coluna-acao">
                                            <RiDeleteBin6Line id="icone-delete" />
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr></tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </ContainerTable>
    );
}

export default TableComponent;