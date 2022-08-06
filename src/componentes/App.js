import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./login/Login"
import Cadastro from "./cadastro/Cadastro"
import Habitos from "./habitos/Habitos"
import Hoje from "./hoje/Hoje"
import { useState } from "react"
import React from 'react';

export default function App() {

    const [imgusuario, setImgusuario] = useState()
    const [porcentagem, setPorcentagem] = useState(90)

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login setImgusuario={setImgusuario} />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/habitos" element={<Habitos porcentagem={porcentagem} imgusuario={imgusuario} />} />
                <Route path="/hoje" element={<Hoje imgusuario={imgusuario} porcentagem={porcentagem}/>} />
            </Routes>
        </BrowserRouter>
    )
}