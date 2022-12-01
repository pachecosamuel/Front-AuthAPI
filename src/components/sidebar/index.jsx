import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import LogoT2m from "../../assets/logo.png";

import { AiOutlineTable, AiOutlineUserAdd } from "react-icons/ai";
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";
import { MdOutlineExitToApp } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ContainerNavStyle } from "./style.js";
import { AuthenticationContext } from "../../Services/Context/contextToken";

function SidebarComponent() {

  const { logOut, user } = useContext(AuthenticationContext);

  const [sideBarCollapse, setSideBarCollapse] = useState(true);
  const navigate = useNavigate();

  function navigateTo(route) {
    setSideBarCollapse(true);
    window.scrollTo(0, 0);
    navigate(route);
  }

  const renderSwitch = () => {
    switch (user.role) {
      case 'COLLABORATOR':
        return (
          <div className="sidebar-nav">
          </div>
        )
        break;

      case 'ADMINISTRATIVE_DEPARTMENT':
        return (
          <div className="sidebar-nav">
            <div className="mt-2 sidebar-nav-item">
              <div onClick={() => navigateTo("/")}>
                <div className="area-icons-label">
                  <AiOutlineTable />
                  {sideBarCollapse ? (
                    ""
                  ) : (
                    <span className="label-sidebar">Controle de Acesso</span>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-2 sidebar-nav-item">
              <div onClick={() => navigateTo("/cadastro")}>
                <div className="area-icons-label">
                  <AiOutlineUserAdd />
                  {sideBarCollapse ? (
                    ""
                  ) : (
                    <span className="label-sidebar">Cadastro</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
        break;

      case 'SYSTEM_ADMINISTRATOR':
        return (
          <div className="sidebar-nav">
            <div className="mt-2 sidebar-nav-item">
              <div onClick={() => navigateTo("/")}>
                <div className="area-icons-label">
                  <AiOutlineTable />
                  {sideBarCollapse ? (
                    ""
                  ) : (
                    <span className="label-sidebar">Controle de Acesso</span>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-2 sidebar-nav-item">
              <div onClick={() => navigateTo("/cadastro")}>
                <div className="area-icons-label">
                  <AiOutlineUserAdd />
                  {sideBarCollapse ? (
                    ""
                  ) : (
                    <span className="label-sidebar">Cadastro</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
        break;

      case 'MANAGER':
        return (
          <div className="sidebar-nav">
            <div className="mt-2 sidebar-nav-item">
              <div onClick={() => navigateTo("/")}>
                <div className="area-icons-label">
                  <AiOutlineTable />
                  {sideBarCollapse ? (
                    ""
                  ) : (
                    <span className="label-sidebar">Controle de Acesso</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
        break;
    }
  }

  return (

    <ContainerNavStyle collapse={sideBarCollapse}>
      <Row>
        <Col className="column-container">
          <div className="logo-area">
            <img src={LogoT2m} alt="Logo T2M" />
          </div>
          <div className="collapse-sidebar-action">
            {sideBarCollapse ? (
              <BsArrowBarRight
                onClick={() => setSideBarCollapse(!sideBarCollapse)}
              />
            ) : (
              <BsArrowBarLeft
                onClick={() => setSideBarCollapse(!sideBarCollapse)}
              />
            )}
          </div>

          {renderSwitch()}

          <div className="container-usuario" onClick={() => navigateTo("/profile")}>
            <BiUserCircle />
            <div className="usuario-info">
              {sideBarCollapse ? (
                ""
              ) : (
                <span className="label-sidebar">
                  {user.fullName}
                </span>
              )}
              {sideBarCollapse ? (
                ""
              ) : (
                <span
                  id="usuario-departamento"
                  className="label-sidebar"
                >
                  {user.corporativeEmail}
                </span>
              )}
            </div>
          </div>
          <div className="sidebar-nav">
            <div className="sidebar-nav-item">
              <div onClick={() => [logOut(), navigateTo("/")]}>
                <div className="area-icons-label">
                  <MdOutlineExitToApp />
                  {sideBarCollapse ? (
                    ""
                  ) : (
                    <span className="label-sidebar">Sair</span>
                  )}{" "}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </ContainerNavStyle>
  );
}

export default SidebarComponent;