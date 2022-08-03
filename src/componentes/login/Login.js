import imglogin from "../../img/img-login.svg"
import { Styledlogin} from "../../styles"
import { useNavigate } from "react-router-dom"

export default function Login(){

    let navigate = useNavigate()

    return (
        <Styledlogin>
            <img src={imglogin} alt="imgagem de login"/>
            <input type="text" placeholder="email" />
            <input type="password" placeholder="senha" />
            <input type="submit" value="Entrar"/>
            <p onClick={()=>{navigate("/cadastro")}}>Não tem uma conta? Cadastre-se!</p>
        </Styledlogin>
    )
}