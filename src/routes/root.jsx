import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "../pages/login/login";
import { Home } from "../pages/home/home";

export function Root() {
    return (

        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>

        </BrowserRouter>

    )
}