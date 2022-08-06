import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from "react-router-dom";
import React, { Component }  from 'react';

export default function Footer({porcentagem}) {

    let navigate = useNavigate()
    return(
        <StyleFooter>
            <p onClick={()=>{navigate("/habitos")}}>Hábitos</p>

            <div onClick={()=>{navigate("/hoje")}} style={{ width: 91, height: 91 }}>
            <CircularProgressbar value={porcentagem} text="Hoje" background backgroundPadding={6} styles={buildStyles({backgroundColor: '#52B6FF', textColor: "#fff", pathColor: "#fff", trailColor: "transparent"})}/>
            </div>
            
            <p>Histórico</p>
        </StyleFooter>
    )
}

const StyleFooter = styled.div`


    font-family: 'Lexend Deca';
    margin: 0 auto;
    width: 375px;
    height: 70px;
    background: #FFFFFF;

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;

    div {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
    }

    p {
        margin: 0 20px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
        cursor: pointer;
    }

`