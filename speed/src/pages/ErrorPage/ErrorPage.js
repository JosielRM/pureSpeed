import React from 'react'
import { ImgErro } from './styled'
import Error from '../../assests/Erro.png'

const ErrorPage = () => {
    return(
        <ImgErro>
            <img src={Error}/>
            <h1>PÁGINA NÃO ENCONTRADA</h1>
        </ImgErro>
    )
}

export default ErrorPage
