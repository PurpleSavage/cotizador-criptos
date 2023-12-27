import styled from '@emotion/styled'
const ContenedorResultado=styled.div`
    color: #fff;
    font-family: 'Lato',sans-serif;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 30px;
`
const Texto =styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`
const Precio =styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`
const Imagen = styled.img`
    display: block;
    width: 120px;
    border-radius: 50%;
`
const Resultado = ({resultado}) => {
    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE}=resultado
  return (
    <ContenedorResultado>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>El precio más alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio más bajo del díia: <span>{LOWDAY}</span></Texto>
            <Texto>Variación en las últimas 24h: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
        
    </ContenedorResultado>
  )
}

export default Resultado