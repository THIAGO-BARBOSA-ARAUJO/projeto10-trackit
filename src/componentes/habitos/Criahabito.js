import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from  'react-loader-spinner'

export default function Criahabito({renderizarhabitos, diasselect, setDiasselect, criahabito, setCriahabito }) {
    
    const semana = ["D", "S", "T", "Q", "Q", "S", "S"]

   
    const [nomehabito, setNomehabito] = useState("")
    const [loading, setLoading] = useState("false")

    function pegaDiasselect(id){
        let jatem = diasselect.includes(id)
        
        if(jatem) {
            setDiasselect(diasselect.filter((aass)=>{
             return aass !== id
         }))
        }else{
            setDiasselect((data)=>([...data, id]))
        }
     }


    function enviahabito() {
      setLoading("true")
		try{
			const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
                name: nomehabito,
                days: diasselect 
		}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        requisicao.then(()=>{
          setCriahabito(false)
          setDiasselect([])
          setNomehabito("")
          renderizarhabitos()
          setLoading("false")
        })
        .catch(()=>{
          setLoading("false")
      })
        
		}catch {
			console.log("deu ruim")
		}
		
	}

  return (
    <>
      {criahabito ? (
        <Styledcriahabito loading={loading}>
          <div className="nome">
            <input type="text" value={nomehabito} onChange={(e)=>{setNomehabito(e.target.value)}} placeholder="nome do hábito" />
            <ul>
              {semana.map((dias, key) => {
                const marcado = diasselect.includes(key)
                return(
                    <Day marcado={marcado} pegaDiasselect={pegaDiasselect} setdiasselect={setDiasselect} dias={dias} key={key} ID={key} />
                )
                
            })}
            </ul>
          </div>
          <div>
            <button
              onClick={() => {
                setCriahabito(false);
              }}>
              Cancelar
            </button>
            <button onClick={()=>enviahabito()}>{loading === "true" ? (<ThreeDots color="#FFFFFF" height={80} width={80} />) : "Salvar"}</button>
          </div>
        </Styledcriahabito>
      ) : (
        ""
      )}
    </>
  );
}

export function Day({marcado, dias, pegaDiasselect, ID }) {
  const [selecionado, setSelecionado] = useState(marcado);
  function handleClick(){
        if(pegaDiasselect){
            setSelecionado((estadoant) => !estadoant);
            pegaDiasselect(ID)
        }
  }
  return (
    <Styleday 
      onClick={handleClick}
      className="dia"
      selecionado={selecionado}
    >
      {dias}
    </Styleday>
  );
}




/* estilos da página */


const Styledcriahabito = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 340px;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 29px;
  pointer-events: ${(props)=>props.loading === "true" ? "none" : "all"};

  div:first-of-type {
    height: 100%;
    padding: 0 17px;
    display: flex;
    flex-direction: column;

    input {
      width: 303px;
      height: 45px;
      background: #ffffff;
      border: 1px solid #d5d5d5;
      border-radius: 5px;
      margin-top: 18px;
      margin-bottom: 8px;
      padding-left: 11px;

      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 19.976px;
      line-height: 25px;
      color: #dbdbdb;
    }
  }

  ul {
    display: flex;
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
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 15.976px;
      line-height: 20px;
      text-align: center;
      color: #52b6ff;
      border: none;
      margin: 23px;
    }

    button:last-of-type {
      cursor: pointer;
      width: 84px;
      height: 35px;
      background: #52b6ff;
      border-radius: 4.63636px;
      opacity: ${(props)=>props.loading === "true" ? "0.5" : "1"};

      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 15.976px;
      line-height: 20px;
      text-align: center;
      color: #ffffff;
      border: none;
      margin-right: 23px;
    }
  }
`;

const Styleday = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.selecionado ? "#CFCFCF" : "")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-right: 4px;
  cursor: pointer;

  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #dbdbdb;
`;
