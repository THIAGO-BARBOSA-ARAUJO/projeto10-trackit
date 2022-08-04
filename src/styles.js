import styled from "styled-components"

//component Login.js e cadastro.js

export const Styledlogin = styled.div`
    
    background-color: #E5E5E5;
    pointer-events: ${(props)=>props.loading === "true" ? "none" : "all"};

    form {
        width: 100%;
        max-width: 375px;
        height: 100vh;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        //background-color: aqua;
    }
    
    img {
        width: 180px;
        height: 178px;
        margin-bottom: 38px;
    }

    input[type=text], input[type=password], input[type=email]{
        width: 303px;
        height: 45px;
        margin-bottom: 6px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
        padding-left: 11px;
        outline: none;
    }

    button {
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 5px;
        cursor: pointer;
        border: none;
        margin-bottom: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: ${(props)=>props.loading === "true" ? "0.5" : "1"};

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF; 
    }

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        cursor: pointer;
    }

`

//component Login.js cadastro.js





//component header da pasta habitos

export const Headerabitos = styled.div`
    
    max-width: 375px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 0 18px;

    p {

        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }

    .img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
        background-image: url(${(props)=> props.imgusuario});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

`



//component header da pasta habitos