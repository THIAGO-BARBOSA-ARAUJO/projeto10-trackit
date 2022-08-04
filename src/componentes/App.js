import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./login/Login"
import Cadastro from "./cadastro/Cadastro"
import Habitos from "./habitos/Habitos"
import { useState } from "react"


export default function App() {

    const [imgusuario, setImgusuario] = useState()

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login setImgusuario={setImgusuario} />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/habitos" element={<Habitos imgusuario={imgusuario} />} />
            </Routes>
        </BrowserRouter>
    )
}