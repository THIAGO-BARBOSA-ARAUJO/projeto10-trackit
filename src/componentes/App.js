import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./login/Login"
import Cadastro from "./cadastro/Cadastro"
import Habitos from "./habitos/Habitos"
import Hoje from "./hoje/Hoje"
import { useState } from "react"
import React from 'react';
import { CustomerContext } from "../contexts/customer"


export default function App() {

    const [imgusuario, setImgusuario] = useState()
    const [porcentagem, setPorcentagem] = useState()

    return(
        <BrowserRouter>
            <CustomerContext.Provider value={{imgusuario, setimgusuario: setImgusuario , porcentagem, setporcentagem: setPorcentagem}}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/habitos" element={<Habitos />} />
                    <Route path="/hoje" element={<Hoje />} />
                </Routes>
            </CustomerContext.Provider>
        </BrowserRouter>
    )
}