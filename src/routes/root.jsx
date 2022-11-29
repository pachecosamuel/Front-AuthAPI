import { React, useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "../pages/login/login";
import { Home } from "../pages/Home";
import { Recuperar } from "../pages/recuperar_senha/recuperar_senha";
import { Cadastro } from "../pages/Cadastro";
import { Profile } from "../pages/profile";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SidebarComponent from "../components/sidebar";
import SideBarMenuBs from "../components/sidebar-bs";
import { AuthenticationContext } from "../Services/Context/contextToken";
import { LoadingComponent } from "../components/loading";
import jwtDecode from "jwt-decode";
import { EditUser } from "../pages/editUser";
import { ViewUser } from "../pages/viewUser";

export function Root() {

    const [windowSize, setWindowSize] = useState(getWindowSize());
    const { token, auth, isAuthenticated, user } = useContext(AuthenticationContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener("resize", handleWindowResize);
        isAuthenticated();
        setLoading(false)
    }, [token, user]);

    function getWindowSize() {
        return window.screen.width;
    }

    function getRoutesByRole() {
        // Caso altere alguma rota para alguma, 
        // também deve ser alterada no switch do componente sidebar e sidebar-bs
        var tokenDecoded = jwtDecode(token);
        switch (tokenDecoded.Role) {
            case 'COLLABORATOR':
                return (
                    <Routes>
                        <Route path="*" element={<Profile />} />
                    </Routes>
                )
                break;
            case 'ADMINISTRATIVE_DEPARTMENT':
                return (
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/user/edit/:userId" element={<EditUser />} />
                        <Route path="/user/view/:userId" element={<ViewUser />} />
                    </Routes>
                )
                break;
            case 'SYSTEM_ADMINISTRATOR':
                return (
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/user/edit/:userId" element={<EditUser />} />
                        <Route path="/user/view/:userId" element={<ViewUser />} />
                    </Routes>
                )
                break;
            case 'MANAGER':
                return (
                    <Routes>
                        <Route path="*" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/user/view/:userId" element={<ViewUser />} />
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
                    <Container fluid>
                        {windowSize < 801 ? (
                            <Row>
                                <Col className="px-0 col">
                                    <SideBarMenuBs />
                                </Col>
                            </Row>
                        ) : null}
                        <Row>
                            {windowSize > 800 ? (
                                <Col className={windowSize > 800 ? "px-0 col-1" : "px-0 col-0"}>
                                    <SidebarComponent />
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