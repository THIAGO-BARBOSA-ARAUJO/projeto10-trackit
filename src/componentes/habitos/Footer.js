import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {

    const percentage = 90;

    return(
        <StyleFooter>
            <p>Hábitos</p>
            <div style={{ width: 91, height: 91 }}>
            <CircularProgressbar value={percentage} text="Hoje" background backgroundPadding={6} styles={buildStyles({backgroundColor: '#52B6FF', textColor: "#fff", pathColor: "#fff", trailColor: "transparent"})}/>
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
    position: relative;

    div {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%)
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