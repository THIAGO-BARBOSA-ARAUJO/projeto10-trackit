import styled from "styled-components"

//component Login.js e cadastro.js

export const Styledlogin = styled.div`
    
    background-color: #E5E5E5;

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

    input[type=submit] {
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 5px;
        cursor: pointer;
        border: none;
        margin-bottom: 36px;

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