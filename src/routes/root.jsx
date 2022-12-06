import { React, useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthenticationContext } from "../Services/Context/contextToken";

import { Login } from "../pages/login/login";
import { Home } from "../pages/home";
import { Recuperar } from "../pages/recuperar_senha/recuperar_senha";
import { Cadastro } from "../pages/cadastro";
import { Profile } from "../pages/profile";
import { NotFound } from "../pages/notFound";
import { EditUser } from "../pages/editUser";
import { ViewUser } from "../pages/viewUser";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import jwtDecode from "jwt-decode";

import SidebarComponent from "../components/sidebar";
import SideBarMenuBs from "../components/sidebar-bs";
import { LoadingComponent } from "../components/loading";
import { ModalComponent } from "../components/modal-component";

export function Root() {

    const [windowSize, setWindowSize] = useState(getWindowSize());
    const { token, auth, isAuthenticated, user, logOut } = useContext(AuthenticationContext);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        handleAuth()
    }, [token, user]);

    function handleWindowResize() {
        setWindowSize(getWindowSize());
    }

    function getWindowSize() {
        return window.screen.width;
    }

    function handleLogOut() {
        logOut()
        setShowModal(false)
    }

    async function handleAuth() {
        await isAuthenticated();
        setLoading(false)
    }

    const renderTableRoutes = (canEdit) => {
        return (
            <>
                <Route path="/" element={<Home />} />
                <Route path="/user/view/:userId" element={<ViewUser />} />
                {canEdit ? <Route path="/user/edit/:userId" element={<EditUser />} /> : <></>}
            </>
        )

    }

    function getRoutesByRole() {
        // Caso altere alguma rota para alguma, 
        // também deve ser alterada no switch do componente sidebar e sidebar-bs
        var tokenDecoded = jwtDecode(token);
        switch (tokenDecoded.Role) {
            case 'COLLABORATOR':
                return (
                    <Routes>
                        <Route path="/notfound" element={<NotFound />} />
                        <Route path="*" element={<Profile />} />
                    </Routes>
                )
                break;
            case 'ADMINISTRATIVE_DEPARTMENT':
                return (
                    <Routes>
                        {renderTableRoutes(true)}
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                )
                break;
            case 'SYSTEM_ADMINISTRATOR':
                return (
                    <Routes>
                        {renderTableRoutes(true)}
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                )
                break;
            case 'MANAGER':
                return (
                    <Routes>
                        {renderTableRoutes(false)}
                        <Route path="/profile" element={<Profile />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                )
                break;
        }
    }

    if (loading) return <LoadingComponent />

    return (
        <BrowserRouter>
            {auth ? (
                <>
                    {showModal ?
                        <ModalComponent
                            showModal={showModal}
                            setShowModal={setShowModal}
                            funcao={handleLogOut}
                            header={'Deseja mesmo sair?'}
                            title={'Atenção'}
                            cancelText={'Não'}
                            acceptText={'Sim'}
                        />
                        :
                        <></>
                    }

                    <Container fluid>

                        {windowSize < 801 ? (
                            <Row>
                                <Col className="px-0 col">
                                    <SideBarMenuBs
                                        setShowModal={setShowModal}
                                    />
                                </Col>
                            </Row>
                        ) : null}
                        <Row>
                            {windowSize > 800 ? (
                                <Col className={windowSize > 800 ? "px-0 col-1" : "px-0 col-0"}>
                                    <SidebarComponent
                                        setShowModal={setShowModal}
                                    />
                                </Col>
                            ) : null}
                            <Col className={windowSize > 800 ? "col-11" : "col-12"}>
                                {getRoutesByRole()}
                            </Col>
                        </Row>
                    </Container>
                </>
            ) : (
                <Routes>
                    <Route path="*" element={<Login />} />
                    <Route path="/recuperar" element={<Recuperar />} />
                </Routes>
            )}
        </BrowserRouter>
    )
}