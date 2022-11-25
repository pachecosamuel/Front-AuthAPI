import { React, useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "../pages/login/login";
import { Home } from "../pages/Home";
import { Recuperar } from "../pages/recuperar_senha/recuperar_senha";
import { Cadastro } from "../pages/Cadastro";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SidebarComponent from "../components/sidebar";
import SideBarMenuBs from "../components/sidebar-bs";
import { AuthenticationContext } from "../Services/Context/contextToken";

export function Root() {

    const [windowSize, setWindowSize] = useState(getWindowSize());
    const { token, auth, isAuthenticated } = useContext(AuthenticationContext);



    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener("resize", handleWindowResize);

        isAuthenticated();
    }, [token]);

    function getWindowSize() {
        return window.screen.width;
    }

    return (
        <BrowserRouter>
            {true ? (
                <>
                    <Container fluid>
                        {windowSize < 801 ? (
                            <Row>
                                <Col className="px-0 col">
                                    <SideBarMenuBs logOut={logOut} />
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
                                <Routes>
                                    <Route path="/home" element={<Home />} />
                                    <Route path="/cadastro" element={<Cadastro />} />
                                </Routes>
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