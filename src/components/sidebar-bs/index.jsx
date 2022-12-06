import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthenticationContext } from "../../Services/Context/contextToken"

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Offcanvas from "react-bootstrap/Offcanvas";

import LogoT2m from "../../assets/logo.png";

import { AiOutlineUserAdd } from "react-icons/ai";
import { BsArrowBarLeft } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { CgMenuRound } from "react-icons/cg";
import { ImExit } from "react-icons/im";

import {
    ContainerSideBar,
    ContainerNavBsStyle,
    LogoArea,
    CloseIconArea,
} from "./style.js";
import { HiOutlineClipboardList } from "react-icons/hi";


function SideBarMenuBs({setShowModal}) {
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

    const renderRegister = () => {
        return (
            <div className="sidebar-nav-item">
                <div onClick={() => navigateTo("/cadastro")}>
                    <div className="area-icons-label">
                        <AiOutlineUserAdd />
                        <span>Cadastro</span>
                    </div>
                </div>
            </div>
        )
    }

    const renderAccessControl = () => {
        return (
            <div className="sidebar-nav-item">
                <div onClick={() => navigateTo("/")}>
                    <div className="area-icons-label">
                        <HiOutlineClipboardList />
                        <span>Controle de Acesso</span>
                    </div>
                </div>
            </div>
        )
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
                        {renderAccessControl()}
                        {renderRegister()}
                    </div>
                )
                break;
            case 'SYSTEM_ADMINISTRATOR':
                return (
                    <div className="flex-column sidebar-bs-nav">
                        {renderAccessControl()}
                        {renderRegister()}
                    </div>
                )
                break;
            case 'MANAGER':
                return (
                    <div className="flex-column sidebar-bs-nav">
                        {renderAccessControl()}
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
                            <BiUserCircle
                                onClick={() => navigateTo("/profile")}
                            />
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
                                        <div onClick={() => setShowModal(true)}>
                                            <div className="area-icons-label">
                                                <ImExit />
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