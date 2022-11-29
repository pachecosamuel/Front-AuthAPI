import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Offcanvas from "react-bootstrap/Offcanvas";
import LogoT2m from "../../assets/logo.png";

import { BsArrowBarLeft } from "react-icons/bs";
import { CgMenuRound } from "react-icons/cg";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineExitToApp } from "react-icons/md";
import { AiOutlineTable, AiOutlineUserAdd } from "react-icons/ai";

import {
    ContainerSideBar,
    ContainerNavBsStyle,
    LogoArea,
    CloseIconArea,
} from "./style.js";

import { AuthenticationContext } from "../../Services/Context/contextToken"

function SideBarMenuBs() {
    const [show, setShow] = useState(false);

    const { logOut, user } = useContext(AuthenticationContext)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    function navigateTo(route) {
        setShow(false);
        window.scrollTo(0, 0);
        navigate(route);
    }

    const renderSwitch = () => {
        switch (user.role) {
            case 'COLLABORATOR':
                return (
                    <div className="flex-column sidebar-bs-nav">
                    </div>
                )
                break;
            case 'ADMINISTRATIVE_DEPARTMENT':
                return (
                    <div className="flex-column sidebar-bs-nav">
                        <div className="sidebar-nav-item">
                            <div onClick={() => navigateTo("/")}>
                                <div className="area-icons-label">
                                    <AiOutlineTable />
                                    <span>Controle de Acesso</span>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-nav-item">
                            <div onClick={() => navigateTo("/cadastro")}>
                                <div className="area-icons-label">
                                    <AiOutlineUserAdd />
                                    <span>Cadastro</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                break;
            case 'SYSTEM_ADMINISTRATOR':
                return (
                    <div className="flex-column sidebar-bs-nav">
                        <div className="sidebar-nav-item">
                            <div onClick={() => navigateTo("/")}>
                                <div className="area-icons-label">
                                    <AiOutlineTable />
                                    <span>Controle de Acesso</span>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-nav-item">
                            <div onClick={() => navigateTo("/cadastro")}>
                                <div className="area-icons-label">
                                    <AiOutlineUserAdd />
                                    <span>Cadastro</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                break;
            case 'MANAGER':
                return (
                    <div className="flex-column sidebar-bs-nav">
                        <div className="sidebar-nav-item">
                            <div onClick={() => navigateTo("/")}>
                                <div className="area-icons-label">
                                    <AiOutlineTable />
                                    <span>Controle de Acesso</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                break;
        }
    }



    return (
        <ContainerSideBar>
            <Row>
                <Col>
                    <div className="button-show-area">
                        <div className="button-show">
                            <CgMenuRound onClick={handleShow} />
                        </div>
                        <div className="area-central">
                            <img src={LogoT2m} alt="Logo T2M" />
                        </div>
                        <div className="area-direita">
                            <BiUserCircle />
                        </div>
                    </div>
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header>
                            <Offcanvas.Title>
                                <LogoArea>
                                    <img src={LogoT2m} alt="Logo T2M" />
                                </LogoArea>
                            </Offcanvas.Title>
                            <CloseIconArea>
                                <BsArrowBarLeft onClick={handleClose} />
                            </CloseIconArea>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ContainerNavBsStyle>

                                {renderSwitch()}

                                <div onClick={() => navigateTo("/profile")} className="container-usuario mt-3">
                                    <BiUserCircle />
                                    <div className="usuario-info">
                                        <span title="Larissa Santos" className="label-sidebar">
                                            {user.fullName}
                                        </span>
                                        <span
                                            id="usuario-departamento"
                                            className="label-sidebar"
                                            title="Departamento Pessoal"
                                        >
                                            {user.corporativeEmail}
                                        </span>
                                    </div>
                                </div>
                                <div className="sidebar-bs-nav">
                                    <div className="sidebar-nav-item mt-3">
                                        <div onClick={logOut}>
                                            <div className="area-icons-label">
                                                <MdOutlineExitToApp />
                                                <span>Sair</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ContainerNavBsStyle>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Col>
            </Row>
        </ContainerSideBar>
    );
}

export default SideBarMenuBs;