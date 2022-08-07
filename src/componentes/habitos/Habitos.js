import Header from "./Header";
import Criahabito from "./Criahabito"
import Pegahabitos from "./Pegahabitos";
import Footer from "./Footer";
import { useEffect, useState, useContext } from "react";
import { CustomerContext } from "../../contexts/customer"
import styled from "styled-components";
import axios from "axios";



export default function Habitos() {

    const [criahabito, setCriahabito] = useState(false)
    const [diasselect, setDiasselect] = useState([])
    const [meushabitos, setMeushabitos] = useState([])
    const {habitosdehoje, sethabitosdehoje, setporcentagem, imgusuario } = useContext(CustomerContext)

    function renderizarhabitos(){
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })

		requisicao.then((resposta) => {
            setMeushabitos(resposta.data)
		})
    }

    useEffect(() => {
		renderizarhabitos()
	}, [])



    useEffect(()=>{

        const porcentagematual = (habitosdehoje.filter((habito)=> habito.done).length / habitosdehoje.length) * 100
        setporcentagem(porcentagematual.toFixed(0))

    },[habitosdehoje])


    function renderizarhabitosdehoje(){
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })

		requisicao.then((resposta) => {
            sethabitosdehoje(resposta.data)
            //console.log(resposta.data)
		})
    }

    useEffect(() => {
		renderizarhabitosdehoje()
	}, [])



    return(
        <>
            <Header imgusuario={imgusuario} />
            <StyleHabitos>
                <Meushabitos>
                    <p>Meus hábitos</p>
                    <button onClick={()=>{setCriahabito(true)}} className="btn-acrecentar-habitos">+</button>
                </Meushabitos>
                <Criahabito renderizarhabitos={renderizarhabitos} diasselect={diasselect} setDiasselect={setDiasselect} setCriahabito={setCriahabito} criahabito={criahabito} />
                <Pegahabitos renderizarhabitos={renderizarhabitos} meushabitos={meushabitos} />
                {meushabitos.length === 0 ? (<p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>) : ""}
                
            </StyleHabitos>
            <Footer />
        </>
    )
}

const StyleHabitos = styled.div`

    background: #E5E5E5;
    margin: 0 auto;
    max-width: 375px;
    width: 100%;
    min-height: 85vh;
    height: 100%;
    padding: 0 17px;
    overflow: scroll;
    
    p { 
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`



const Meushabitos = styled.div`

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 28px 0 20px;
        
    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    button {
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;

        font-family: monospace;
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        color: #FFFFFF;
        cursor: pointer;
    }

`