import {Headerabitos} from "../../styles"

export default function Header(){
    const imgusuario = localStorage.getItem("imguser")
    return (
        <Headerabitos imgusuario={imgusuario}>
            <p>TrackIt</p>
            <div className="img">
                
            </div>
        </Headerabitos>
    )
}