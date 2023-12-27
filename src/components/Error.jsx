import styled from '@emotion/styled'
const Texto = styled.div`
    background-color: #b7322c;
    color: #fff;
    padding: 10px;
    font-size: 22px;
    font-family: 'Lato',sans-serif;
    font-weight: 700;
    text-align: center;
`
const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error