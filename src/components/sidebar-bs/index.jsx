import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Offcanvas from "react-bootstrap/Offcanvas";
 import LogoT2m from "../../assets/logo.png";

import { CgHome } from "react-icons/cg";
import { BsArrowBarLeft } from "react-icons/bs";
import { CgMenuRound } from "react-icons/cg";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineExitToApp } from "react-icons/md";
import {
  ContainerSideBar,
  ContainerNavBsStyle,
  LogoArea,
  CloseIconArea,
} from "./style.js";

function SideBarMenuBs({ logOut }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  function navigateTo(route) {
    setShow(false);
    window.scrollTo(0, 0);
    navigate(route);
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
                <div className="flex-column sidebar-bs-nav">
                  <div className="sidebar-nav-item">
                    <div onClick={() => navigateTo("/")}>
                      <div className="area-icons-label">
                        <CgHome />
                        <span>Início</span>
                      </div>
                    </div>
                  </div>              
                </div>
                <div className="container-usuario mt-3">
                  <BiUserCircle />
                  <div className="usuario-info">
                    <span title="Larissa Santos" className="label-sidebar">
                      Usuario X
                    </span>
                    <span
                      id="usuario-departamento"
                      className="label-sidebar"
                      title="Departamento Pessoal"
                    >
                      Departamento de teste
                    </span>
                  </div>
                </div>
                <div className="sidebar-bs-nav">
                  <div className="sidebar-nav-item mt-3">
                    <div onClick={() => logOut()}>
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