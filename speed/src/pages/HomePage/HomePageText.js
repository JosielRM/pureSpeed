import React from 'react'
import { ParagrafoUm } from './styled'
import Formula1Page from '../Formula1Page/Formula1Page'
import {goToFormula1, goToFormulae, goToHome, goToLogin, goToMotogp, goToStockcar } from '../../routs/coordinator'
import { useHistory } from "react-router-dom"

const HomePageText = () => {
    return(
        <div>
            <ParagrafoUm>
                <h1> Valteri Botas de aula de pilotagem no Grande
                Prêmio da Turquia</h1>
            </ParagrafoUm>
        </div>
    )
}

export default HomePageText