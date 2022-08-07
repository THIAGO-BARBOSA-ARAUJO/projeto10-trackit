import Footer from "../habitos/Footer"
import styled from "styled-components"
import Header from "../habitos/Header"
import dayjs from "dayjs"
import { useEffect, useState, useContext } from "react"
import { CustomerContext } from "../../contexts/customer"
import axios from "axios"
import CheckedCinza from "../../img/checked-cinza.png"
import CheckedVerde from "../../img/checked-verde.png"

export default function Hoje(){

    const [diadasemana, setDiadasemana] = useState("")

    const {habitosdehoje, sethabitosdehoje, imgusuario, porcentagem, setporcentagem } = useContext(CustomerContext)

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

    useEffect(()=>{

        const porcentagematual = (habitosdehoje.filter((habito)=> habito.done).length / habitosdehoje.length) * 100
        setporcentagem(porcentagematual.toFixed(0))

    },[habitosdehoje])

    function desmarcarComoFeito(id){
        const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,{}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })

		requisicao.then(() => {
            renderizarhabitosdehoje()
		})
    }

    
    function marcarComoFeito(id){
        const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,{}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })

		requisicao.then(() => {
            renderizarhabitosdehoje()
		})
    }


    function renderizarhabitosdehoje(){
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
		renderizarhabitosdehoje()
	}, [])

    return(
        <>  
            <Header imgusuario={imgusuario} />
            <StyleHoje className="hoje">
                <h1>{diadasemana}, {dayjs().format('DD/MM')}</h1>
                <p>{porcentagem}% dos hábitos concluídos</p>
                {habitosdehoje.map((habito, key)=>{

                    return(
                        <div key={key} className="habitoshoje">
                            <div className="textos">
                                <h2>{habito.name}</h2>
                                <p>Sequência atual: <span className="atual">{habito.currentSequence} dias</span></p>
                                <p>Seu recorde: <span className="record">{habito.highestSequence} dias</span></p>
                            </div>
                            <label>
                               <img onClick={()=>{
                                (habito.done ? desmarcarComoFeito(habito.id) : marcarComoFeito(habito.id))}} src={habito.done ? CheckedVerde : CheckedCinza} />
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
    min-height: 84vh;
    height: 100%;
    padding: 0 17px;
    overflow: scroll;

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
        max-width: 230px;
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

    label img {
        width: 69px;
        height: 69px;
        cursor: pointer;
    }

   

`


// (nrespondidas/ntotal)*100 -> calculo para fazer a barra de progresso 