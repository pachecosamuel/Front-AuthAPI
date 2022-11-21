import React from "react";
import { Login } from "../pages/login/login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export function Root() {
    return (

        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>

        </BrowserRouter>

    )
}