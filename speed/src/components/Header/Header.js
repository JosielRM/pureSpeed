import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { StyledToobar } from './styled'
import {goToFormula1, goToFormulae, goToHome, goToLogin, goToMotogp, goToStockcar } from '../../routs/coordinator'
import { useHistory } from "react-router-dom"
import Button from '@material-ui/core/Button'
import LogoHeader from "../../assests/LogoHeader.png"

const Header = () => {
    const history = useHistory()
    return(
        <AppBar position="static">
            <StyledToobar>
                <Button onClick={() => goToHome(history)} color="inherit" ><img src={LogoHeader} width="50" /></Button>
                <Button onClick={() => goToFormula1(history)} color="inherit">Formula 1</Button>
                <Button onClick={() => goToMotogp(history)} color="inherit">Moto GP</Button>
                <Button onClick={() => goToStockcar(history)} color="inherit">Stock Car</Button>
                <Button onClick={() => goToFormulae(history)} color="inherit">Formula E</Button>
                <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
            </StyledToobar>
        </AppBar>
    )
}
export default Header