import Subdivisao from "./Subdivisao";
import linha from "../styles/Linha.module.css"

export default function Linha(props){
    const linhaBranca = (
        <>
            <Subdivisao />
            <Subdivisao preto />
            <Subdivisao />
            <Subdivisao preto />
            <Subdivisao />
            <Subdivisao preto />
            <Subdivisao />
            <Subdivisao preto />
        </>
    )

    const linhaPreta =  (
        <>
            <Subdivisao preto />
            <Subdivisao  />
            <Subdivisao preto />
            <Subdivisao  />
            <Subdivisao preto />
            <Subdivisao  />
            <Subdivisao preto />
            <Subdivisao  />
        </>
    )

    const linhaChamada = props.preta ?linhaPreta: linhaBranca;
    return(
        <div 
        className={linha.linha}>

            {linhaChamada}
        </div>
    )
}