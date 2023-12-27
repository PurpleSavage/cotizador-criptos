import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import useSelectMonedas from '../hooks/useSelectMonedas'
import Error from './Error'
import { monedas } from '../data/monedas'
const InputSubmit = styled.input`
    background-color: rgb(17 94 89);
    border: none;
    width: 100%;
    padding: 10px;
    color:#fff;
    font-weight: 700;
    font-size: 20px;
    border-radius: 10px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover{
        background-color: rgb(19 78 74);
        cursor: pointer;
    }
`
const Formulario = ({setMonedas}) => {
    const [criptos,setCriptos]=useState([])
    const [error,setError]=useState(false)
    const  [moneda,SelectMonedas] = useSelectMonedas('Elige tu Moneda',monedas)
    const  [criptomoneda,SelectCriptomoneda] = useSelectMonedas('Elige tu Criptomoneda',criptos)
    useEffect(()=>{
        const consultarApi = async()=>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const response = await fetch(url)
            const {Data}= await response.json()

            const arrayCriptos =Data.map(cripto =>{
                const objeto ={
                    id:cripto.CoinInfo.Name,
                    nombre:cripto.CoinInfo.FullName
                }
                return objeto
                
            })
            setCriptos(arrayCriptos)
        }
        consultarApi()
    },[])
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        if([moneda,criptomoneda].includes('')){
            setError(true)
            return
        }
        setError(false)
        setMonedas({moneda,criptomoneda})
    }
  return (
    <>
        {error && <Error>Todos los campos son obligatorios</Error>}
        <form onSubmit={handleSubmit}>
            <SelectMonedas/>
            <SelectCriptomoneda/>
            <InputSubmit type="submit" value="cotizar" />
        </form>
    </>
  )
}

export default Formulario