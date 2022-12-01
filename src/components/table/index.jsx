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
import { BsEye } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function TableComponent({ registros, setUpdateTable, updateTable, setCurrentPage, setIsSearching, setButtonAll }) {

    const { user } = useContext(AuthenticationContext);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    let navigate = useNavigate();

    const desactivateUser = async (user) => {
        try {
            setLoading(true)
            var res = await api.put(`User/deactivate/${user.id}`)
            if (res.data.isSuccess) {
                setButtonAll('todos')
                setUpdateTable(!updateTable);
                setCurrentPage(1);
                toast.success('Usuário Desativado com sucesso!');
                setIsSearching(false)
            }
            setLoading(false)
            setShowModal(false)
        } catch (error) {
            console.log(error);
            toast.error('Erro ao desativar o usuário - ' + JSON.stringify(error.message));
            setLoading(false)
            setShowModal(false)
        }
    }

    const renderActionsByRole = (userTable) => {
        switch (user.role) {
            case 'MANAGER':
                return (
                    <>
                        <td className="coluna-acao">
                            <BsEye
                                onClick={() => navigate(`user/view/${userTable.id}`)}
                            />
                        </td>
                    </>
                )
                break;
            case 'SYSTEM_ADMINISTRATOR':
                return (
                    <>
                        <td className="coluna-acao">
                            <BsEye
                                onClick={() => navigate(`user/view/${userTable.id}`)}
                            />
                        </td>
                        <td className="coluna-acao">
                            <CiEdit
                                onClick={() => navigate(`user/edit/${userTable.id}`)}
                            />
                        </td>

                        <td className="coluna-acao">
                            <RiDeleteBin6Line
                                id="icone-delete"
                                onClick={() => [setShowModal(true), setCurrentUser(userTable)]}
                            />
                            <DesactivateUserModalComponent
                                showModal={showModal}
                                setShowModal={setShowModal}
                                desactivateUser={desactivateUser}
                                user={currentUser}
                                loading={loading}
                            />
                        </td>
                    </>
                )
                break;
            case 'ADMINISTRATIVE_DEPARTMENT':
                return (
                    <>
                        <td className="coluna-acao">
                            <BsEye
                                onClick={() => navigate(`user/view/${userTable.id}`)}
                            />
                        </td>
                        <td className="coluna-acao">
                            <CiEdit
                                onClick={() => navigate(`user/edit/${userTable.id}`)}
                            />
                        </td>

                        <td className="coluna-acao">
                            <RiDeleteBin6Line
                                id="icone-delete"
                                onClick={() => [setShowModal(true), setCurrentUser(userTable)]}
                            />
                            <DesactivateUserModalComponent
                                showModal={showModal}
                                setShowModal={setShowModal}
                                desactivateUser={desactivateUser}
                                user={currentUser}
                                loading={loading}
                            />
                        </td>
                    </>
                )
                break;
        }
    }

    const renderHeaderByRole = () => {
        switch (user.role) {
            case 'MANAGER':
                return (
                    <>
                        <th colSpan="2">Ações</th>
                    </>
                )
                break;
            case 'SYSTEM_ADMINISTRATOR':
                return (
                    <>
                        <th colSpan="2">Ações</th>
                    </>
                )
                break;
            case 'ADMINISTRATIVE_DEPARTMENT':
                return (
                    <>
                        <th colSpan="2">Ações</th>
                    </>
                )
                break;
        }
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
                            {renderHeaderByRole()}
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


                                        {renderActionsByRole(r)}

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