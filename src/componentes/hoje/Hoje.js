import Footer from "../habitos/Footer"
import styled from "styled-components"
import Header from "../habitos/Header"
import dayjs from "dayjs"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Hoje({imgusuario, porcentagem}){

    const [diadasemana, setDiadasemana] = useState("")
    const [habitosdehoje, sethabitosdehoje] = useState([])


    useEffect(()=>{

        const diasem = dayjs().format('dddd')

        if(diasem === "Sunday"){
            setDiadasemana("Domingo")

        }
        if(diasem === "Monday"){
            setDiadasemana("Segunda")

        }
        if(diasem === "Tuesday"){
            setDiadasemana("Terça")

        }
        if(diasem === "Wednesday"){
            setDiadasemana("Quarta")

        }
        if(diasem === "Thursday"){
            setDiadasemana("Quinta")

        }
        if(diasem === "Friday"){
            setDiadasemana("Sexta")

        }
        if(diasem === "Saturday"){
            setDiadasemana("Sábado")

        }

    },[])

    

    function renderizarhabitos(){
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })

		requisicao.then((resposta) => {
            sethabitosdehoje(resposta.data)
		})
    }

    useEffect(() => {
		renderizarhabitos()
	}, [])

    console.log(habitosdehoje)

    return(
        <>  
            <Header imgusuario={imgusuario} />
            <StyleHoje className="hoje">
                <h1>{diadasemana}, {dayjs().format('DD/MM')}</h1>
                <p>67% dos hábitos concluídos</p>
                {habitosdehoje.map((habitos, key)=>{
                    return(
                        <div key={key} className="habitoshoje">
                            <div className="textos">
                                <h2>{habitos.name}</h2>
                                <p>Sequência atual: <span className="atual">{habitos.currentSequence} dias</span></p>
                                <p>Seu recorde: <span className="record">{habitos.highestSequence} dias</span></p>
                            </div>
                            <label>
                               <img/>
                            </label>
                        </div>
                    )
                })}
            </StyleHoje>
            <Footer porcentagem={porcentagem} />
        </>
    )
}

const StyleHoje = styled.div`

    background: #E5E5E5;
    margin: 0 auto;
    max-width: 375px;
    width: 100%;
    height: 83vh;
    padding-top: 28px;

    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin-bottom: 3px;
        margin-left: 10px
        
    }

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #8FC549;
        margin-bottom: 28px;
        margin-left: 10px
    }

    .habitoshoje {
        width: 340px;
        min-height: 94px;
        background: #FFFFFF;
        border-radius: 5px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        margin-left: 10px
    }

    .habitoshoje .textos {
        max-width: 250px;
    }

    .habitoshoje h2 {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #666666;
            margin-top: 13px;
            margin-bottom: 7px;
            margin-left: 10px
    }

    .habitoshoje p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
        margin-bottom: 3px;
    }


    label {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 13px;
        background-color: "red";
    }

   

`


// (nrespondidas/ntotal)*100 -> calculo para fazer a barra de progresso 