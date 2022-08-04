import styled from "styled-components";
import { useState } from "react";


export default function Criahabito ({criahabito, setCriahabito}) {

    const semana = ["D", "S", "T", "Q", "Q", "S", "S"]
    const [day, setDay] = useState(false)

    return  (
        <>
            {criahabito ? (
                <Styledcriahabito day={day}>
                    <div className="nome">
                        <input type="text" placeholder="nome do hábito" />
                        <ul>
                            {semana.map((dias, key)=>(
                                <li onClick={()=>{setDay(!day)}} key={key} className="dia">
                                    {dias}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <button onClick={()=>{setCriahabito(false)}}>Cancelar</button>
                        <button>Salvar</button>
                    </div>
                </Styledcriahabito>) : ("")}
            </>
    )
}

const Styledcriahabito = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 29px;

    div:first-of-type {
        height: 100%;
        padding: 0 17px;
        display: flex;
        flex-direction: column;

        input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-top: 18px;
        margin-bottom: 8px;
        padding-left: 11px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        }
    }

    ul {
        display: flex;
    }

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        background-color: ${(props)=>props.day ? "#CFCFCF" : ""};
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-right: 4px;
        cursor: pointer;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }

    div:last-of-type {
        //background-color: aqua;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        button:first-of-type {
            cursor: pointer;
            background-color: white;
            width: 69px;
            height: 20px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;
            text-align: center;
            color: #52B6FF;
            border: none;
            margin: 23px;
            }

        button:last-of-type {
            cursor: pointer;
            width: 84px;
            height: 35px;
            background: #52B6FF;
            border-radius: 4.63636px;

            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;
            text-align: center;
            color: #FFFFFF;
            border: none;
            margin-right: 23px;
        }
    }

`