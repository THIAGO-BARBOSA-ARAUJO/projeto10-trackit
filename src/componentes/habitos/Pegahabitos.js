import axios from "axios";
import Lixeira from "../../img/lixeira.svg"
import styled from "styled-components";
import { Day } from "./Criahabito";

export default function Pegahabitos({renderizarhabitos, meushabitos}) {
    
    function deletarhabito(id){
        const requisicao = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        renderizarhabitos()
    }

    //const [nomehabito, setNomehabito] = useState()
    const semana = ["D", "S", "T", "Q", "Q", "S", "S"]
    //const [diaselecionado, setDiaselecionado] = useState([])
    
    return(
        meushabitos.map((habitos, index)=>{
            return(
                <Styledpegahabito key={index}>
                    <div className="nome-dias">
                        <p>{habitos.name}</p>
                       <div className="dias">
                       {semana.map((dia, index)=>{
                            const marcado = habitos.days.includes(index)
                            return(
                                <Day key={index} dias={dia} marcado={marcado}/>
                            )
                        })}
                       </div>
                    </div>
                    <div className="img">
                        <img onClick={()=>{
                            deletarhabito(habitos.id)
                        }} src={Lixeira} alt="lalalal"/>
                    </div>
                </Styledpegahabito>
            )
        })
    )
}

const Styledpegahabito = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    width: 340px;
    background: #FFFFFF;
    border-radius: 5px;


    .nome-dias {
        margin-top: 13px;
        margin-left: 15px;
        margin-bottom: 10px;
    }

    .nome-dias p {
        margin-bottom: 10px
    }

    .dias {
        display: flex;
    }

    .img {
        height: 100%;
        cursor: pointer;
        margin-top: 11px;
        margin-right:10px;
    }

`;