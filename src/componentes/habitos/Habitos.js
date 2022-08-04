import Header from "./Header";
import { useState } from "react";
import styled from "styled-components";
import Criahabito from "./Criahabito"
import Pegahabitos from "./Pegahabitos";

export default function Habitos({imgusuario}) {

    const [criahabito, setCriahabito] = useState(false)
    const [diasselect, setDiasselect] = useState([])

    return(
        <>
            <Header imgusuario={imgusuario} />
            <StyleHabitos>
                <Meushabitos>
                    <p>Meus hábitos</p>
                    <button onClick={()=>{setCriahabito(true)}} className="btn-acrecentar-habitos">+</button>
                </Meushabitos>
                <Criahabito diasselect={diasselect} setDiasselect={setDiasselect} setCriahabito={setCriahabito} criahabito={criahabito} />
                <Pegahabitos />
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </StyleHabitos>
        </>
    )
}

const StyleHabitos = styled.div`

    background: #E5E5E5;
    margin: 0 auto;
    max-width: 375px;
    width: 100%;
    height: 100vh;
    padding: 0 17px;
    
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