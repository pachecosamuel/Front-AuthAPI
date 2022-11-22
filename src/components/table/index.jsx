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
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Email</th>
                            <th colSpan="2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registros.length > 0 ? (
                            registros.map((r, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{r.id}</td>
                                        <td>{r.nome}</td>
                                        <td>{r.sobrenome}</td>
                                        <td>{r.email}</td>
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