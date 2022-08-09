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
    const [ficaverde, setFicaverde] = useState(false)

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

        const porcentagematual = String((habitosdehoje.filter((habito)=> habito.done).length / habitosdehoje.length) * 100)
        if(porcentagematual === "NaN"){
            setporcentagem(0)
        }else{
            const porcen = porcentagematual.substring(0,3) 
            setporcentagem( porcen.replace(".", ""))
        }
        
        
        
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
            <StyleHoje ficaverde={ficaverde} >
                <h1>{diadasemana}, {dayjs().format('DD/MM')}</h1>
                <p>{porcentagem}% dos hábitos concluídos</p>
                {habitosdehoje.map((habito, key)=>{
                    return (
                      <div key={key} className="habitoshoje">
                        <div className="textos">
                          <h2>{habito.name}</h2>
                          {habito.done ? (
                            <p>
                              Sequência atual:
                              <strong> {habito.currentSequence} dias</strong>
                            </p>
                          ) : (
                            <p>
                              Sequência atual: {habito.currentSequence} dias
                            </p>
                          )}

                          {habito.done &&
                          habito.currentSequence >=
                            habito.highestSequence ? (
                            <p>
                              Seu recorde:
                              <strong> {habito.highestSequence} dias</strong>
                            </p>
                          ) : (
                            <p>Seu recorde: {habito.highestSequence} dias</p>
                          )}
                        </div>
                        <label>
                          <img
                            onClick={() => {
                              habito.done
                                ? desmarcarComoFeito(habito.id)
                                : marcarComoFeito(habito.id);
                            }}
                            src={habito.done ? CheckedVerde : CheckedCinza}
                          />
                        </label>
                      </div>
                    );
                })}
            </StyleHoje>
            <Footer porcentagem={porcentagem} />
        </>
    )
}

const StyleHoje = styled.div`
  margin: 0 auto;
  max-width: 375px;
  width: 100%;
  min-height: 84vh;
  height: 100%;
  padding: 0 17px;
  overflow: scroll;

  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
    margin-bottom: 3px;
    margin-top: 28px;
  }

  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #8fc549;
    margin-bottom: 28px;
  }

  .habitoshoje {
    width: 340px;
    min-height: 94px;
    background: #ffffff;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }

  .habitoshoje .textos {
    max-width: 230px;
  }

  .habitoshoje h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-top: 13px;
    margin-bottom: 7px;
    margin-left: 10px;
  }

  .habitoshoje p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
    margin-bottom: 3px;
    margin-left: 10px;
  }

  .habitoshoje p strong {
    color: #8fc549;
  }

  .habitoshoje p {
    color: #666666;
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
`;


// (nrespondidas/ntotal)*100 -> calculo para fazer a barra de progresso 