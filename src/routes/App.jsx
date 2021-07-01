import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'wouter'

import Layout from '../components/Layout'
import Index from '../pages/Index'
import SingIn from '../pages/SingIn'
import CreateAccount from '../pages/CreateAccount'
import NotFound from '../pages/NotFound'
import Categories  from '../pages/Categories'
import Books from '../pages/Books'
import SearchPage from '../pages/SearchPage'
import Authors from '../pages/Authors'
import Logout from '../pages/Logout'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/iniciar-sesion/" component={SingIn} />
                    <Route exact path="/iniciar-sesion/crear-cuenta/" component={CreateAccount} />
                    <Route exact path="/categories/:categorieName/" component={Categories} /> 
                    <Route exact path="/libro/:bookName/" component={Books} />
                    <Route exact path="/search/:bookSearch/" component={SearchPage} />
                    <Route exact path="/autor/:autorName/" component={Authors} />
                    <Route exact path="/salir/" component={Logout} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App
