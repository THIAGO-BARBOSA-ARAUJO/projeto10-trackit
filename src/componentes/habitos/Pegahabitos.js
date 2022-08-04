import { useEffect, useState } from "react";
import axios from "axios";
import Lixeira from "../../img/lixeira.svg"
import styled from "styled-components";
import { Day } from "./Criahabito";

export default function Pegahabitos({atualizarhabitos}) {
    
    const [meushabitos, setMeushabitos] = useState([])
    //const [nomehabito, setNomehabito] = useState()
    const semana = ["D", "S", "T", "Q", "Q", "S", "S"]
    const [diaselecionado, setDiaselecionado] = useState([])


    useEffect(() => {
		const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })

		requisicao.then((resposta) => {
            setMeushabitos(resposta.data)
            //console.log(resposta.data)
		})
	}, [])
    
    return(
        meushabitos.map((habitos, index)=>{
            return(
                <Styledpegahabito key={index} className="meushabitos">
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
                        <img src={Lixeira} alt="lalalal"/>
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
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;


    .nome-dias {
        margin-top: 13px;
        margin-left: 15px;
    }

    .nome-dias p {
        margin-bottom: 10px
    }

    .dias {
        display: flex;
    }

    .img {
        cursor: pointer;
        margin-top: 11px;
        margin-right:10px;
    }

`;