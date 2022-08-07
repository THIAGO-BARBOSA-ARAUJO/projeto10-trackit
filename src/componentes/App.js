import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./login/Login"
import Cadastro from "./cadastro/Cadastro"
import Habitos from "./habitos/Habitos"
import Hoje from "./hoje/Hoje"
import Historico from "./historico/Historico"
import { useState } from "react"
import React from 'react';
import { CustomerContext } from "../contexts/customer"



export default function App() {

    const [imgusuario, setImgusuario] = useState()
    const [porcentagem, setPorcentagem] = useState()
    const [habitosdehoje, setHabitosdehoje] = useState([])

    return(
        <BrowserRouter>
            <CustomerContext.Provider value={{habitosdehoje, sethabitosdehoje: setHabitosdehoje , porcentagem, setporcentagem: setPorcentagem}}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/habitos" element={<Habitos />} />
                    <Route path="/hoje" element={<Hoje />} />
                    <Route path="/historico" element={<Historico />} />
                </Routes>
            </CustomerContext.Provider>
        </BrowserRouter>
    )
}