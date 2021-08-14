import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import Formula1Page from "../pages/Formula1Page/Formula1Page"
import FormulaePage from "../pages/FormulaePage/FormulaePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import MotogpPage from "../pages/MotogpPage/MotogpPage"
import SingUpPage from "../pages/SingUpPage/SingUpPage"
import StockcarPage from "../pages/StockcarPage/StockcarPage"
import HomePage from '../pages/HomePage/HomePage'
import Header from "../components/Header/Header"

const Router = () => {
    return(
      <BrowserRouter>
      <Header/>
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route exact path="/formula1">
                <Formula1Page/>
            </Route>
           <Route exact path="/formulae">
                <FormulaePage/>
            </Route>
            <Route exact path="/login">
                <LoginPage/>
            </Route>
            <Route exact path="/motogp">
                <MotogpPage/>
            </Route>
            <Route exact path="/cadastro">
                <SingUpPage/>
            </Route>
            <Route exact path="/stockcar">
                <StockcarPage/>
            </Route> 
            <Route>
                <ErrorPage/>
            </Route>
        </Switch>
      </BrowserRouter>  
    )
}
export default Router