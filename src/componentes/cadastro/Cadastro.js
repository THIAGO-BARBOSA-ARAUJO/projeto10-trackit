import imglogin from "../../img/img-login.svg"
import { Styledlogin} from "../../styles"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
//import { ThreeDots } from  'react-loader-spinner'

export default function Cadastro() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")
    const [foto, setFoto] = useState("")


    let navigate = useNavigate()


    function fazerCadastro(event) {
		event.preventDefault();

		try{
			const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
    
            email: email,
            name: nome,
            image: foto,
            password: senha
            
		});
		console.log(requisicao)
			//navigate("/")
		}catch {
			console.log("deu ruim")
		}
	}

    return(
        <Styledlogin>
            <form onSubmit={fazerCadastro}>
                <img src={imglogin} alt="imgagem de login"/>
                <input required type="email" id="campoEmail" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
                
                <input required type="text" id="camposenha" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} /><br/>
                
                <input required type="text" id="campoNome" placeholder="nome" value={nome} onChange={e => setNome(e.target.value)} /><br/>
                
                <input required type="text" id="campofoto" placeholder="foto" value={foto} onChange={e => setFoto(e.target.value)} /><br/>

                <input type="submit" value={"Cadastra"}/>
                <p>Já tem uma conta? Faça login!</p>
            </form>
            
        </Styledlogin>
    )
}

/*      colocar no button para efeito de carregamento 
        <div>
            <ThreeDots color="#00BFFF" height={80} width={80} />
        </div>

*/

/*

 try{
			const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
    
            email: email,
            name: nome,
            image: foto,
            password: senha
            
		});
		console.log(requisicao)
			//navigate("/")
		}catch {
			console.log("deu ruim")
		}

*/