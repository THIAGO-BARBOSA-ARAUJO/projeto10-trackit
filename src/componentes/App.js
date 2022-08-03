import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./login/Login"
import Cadastro from "./cadastro/Cadastro"

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    )
}