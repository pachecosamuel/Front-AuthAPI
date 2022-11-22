import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "../pages/login/login";
import { Home } from "../pages/Home";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SidebarComponent from "../components/sidebar";
import SideBarMenuBs from "../components/sidebar-bs";

export function Root() {
    const [logged, setLogged] = useState(true);
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener("resize", handleWindowResize);
    }, []);

    function getWindowSize() {
        return window.screen.width;
    }

    function logOut() {
        setLogged(false)
    }

    return (
        <BrowserRouter>
            {logged ? (
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
                                    <SidebarComponent logOut={logOut} />
                                </Col>
                            ) : null}
                            <Col className={windowSize > 800 ? "col-11" : "col-12"}>
                                <Routes>
                                    <Route path="/home" element={<Home />} />
                                </Routes>
                            </Col>
                        </Row>
                    </Container>
                </>
            ) : (
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            )}
        </BrowserRouter>
    )
}