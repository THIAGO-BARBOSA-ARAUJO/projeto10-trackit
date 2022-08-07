import imglogin from "../../img/img-login.svg"
import { Styledlogin} from "../../styles"
import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import axios from "axios"
import { ThreeDots } from  'react-loader-spinner'
import { CustomerContext } from "../../contexts/customer"


export default function Login(){

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [loading, setLoading] = useState("false")

    let navigate = useNavigate()
    //const { setimgusuario } = useContext(CustomerContext)


    function fazerLogin(event) {
		event.preventDefault();

        setLoading("true")

		try{
			const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
    
            email: email,
            password: senha
            
		})

            requisicao.then((req)=>{
                localStorage.setItem("imguser", req.data.image)
                localStorage.setItem("token", req.data.token)
                navigate("/habitos")
            })
            .catch(()=>{
                setLoading("false")
            })

			//navigate("/")
		}catch {
			console.log("deu ruim")
            
            setEmail("")
            setSenha("")
		}
	}

    return (
        <Styledlogin loading={loading}>
            <form onSubmit={fazerLogin}>
                <img src={imglogin} alt="imgagem de login"/>
                
                <input required type="text" id="campoemail" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
                
                <input required type="password" id="camposenha" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} /><br/>
                <button>{loading === "true" ? (<ThreeDots color="#FFFFFF" height={80} width={80} />) : "Entrar"}</button>
                <p onClick={()=>{navigate("/cadastro")}}>Não tem uma conta? Cadastre-se!</p>
            </form>
        </Styledlogin>
    )
}

/*

login: nyx@gmail.com
senha: 123456

*/