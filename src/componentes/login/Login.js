import imglogin from "../../img/img-login.svg"
import { Styledlogin} from "../../styles"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function Login(){

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

    let navigate = useNavigate()

    function fazerLogin(event) {
		event.preventDefault();

		try{
			const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
    
            email: email,
            password: senha
            
		})

            requisicao.then((req)=>{
                console.log(req.data)
            })

			navigate("/")
		}catch {
			console.log("deu ruim")
		}
        setEmail("")
        setSenha("")
	}

    return (
        <Styledlogin>
            <form onSubmit={fazerLogin}>
                <img src={imglogin} alt="imgagem de login"/>
                
                <input required type="text" id="campoemail" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
                
                <input required type="password" id="camposenha" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} /><br/>
                <input type="submit" value="Entrar"/>
                <p onClick={()=>{navigate("/cadastro")}}>Não tem uma conta? Cadastre-se!</p>
            </form>
        </Styledlogin>
    )
}

/*

login: nyx@gmail.com
senha: 123456

*/