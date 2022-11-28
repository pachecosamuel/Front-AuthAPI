import { React, useContext, useState } from "react";
import Table from "react-bootstrap/Table";

import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

import { ContainerTable } from "./style";
import { api } from "../../Services/Api/apiConnection";
import { AuthenticationContext } from "../../Services/Context/contextToken";
import { Modal } from "react-bootstrap";
import ButtonComponent from "../button";
import { DesactivateUserModalComponent } from "../desactivateUserModal";
import { toast } from "react-toastify";

function TableComponent({ registros, setUpdateTable, updateTable, setCurrentPage }) {

    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    const desactivateUser = async (user) => {
        setLoading(true)
        var res = await api.put(`User/deactivate/${user.id}`)
        if (res.data.isSuccess) {
            setUpdateTable(!updateTable);
            setCurrentPage(1);
            toast.success('Usuário Desativado com sucesso!');
        }
        setLoading(true)
        setShowModal(false)
    }

    return (
        <ContainerTable>
            <div className="table-area">
                <Table hover>
                    <thead>
                        <tr>
                            <th>CPF</th>
                            <th>Nome</th>
                            <th>Email Corporativo</th>
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
                                        <td>{r.fullName}</td>
                                        <td>{r.corporativeEmail}</td>
                                        <td>{r.personalEmail}</td>
                                        <td>{r.phone}</td>
                                        <td>{r.birthDate}</td>
                                        <td>{r.admissionDate}</td>
                                        <td className="coluna-acao">
                                            <CiEdit
                                            />
                                        </td>
                                        <td className="coluna-acao">
                                            <RiDeleteBin6Line
                                                id="icone-delete"
                                                onClick={() => [setShowModal(true),setCurrentUser(r)]}
                                            />
                                            <DesactivateUserModalComponent
                                                showModal={showModal}
                                                setShowModal={setShowModal}
                                                desactivateUser={desactivateUser}
                                                user={currentUser}
                                                loading={loading}
                                            />
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