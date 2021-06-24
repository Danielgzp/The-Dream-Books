import React from 'react'
import { BrowserRouter, Switch, Link} from 'react-router-dom'
import { Route } from 'wouter'

import Layout from '../components/Layout'
import Index from '../containers/Index'
import SingUp from '../containers/SingUp'
import CreateAccount from '../containers/CreateAccount'
import NotFound from '../containers/NotFound'
import Categories  from '../containers/Categories'
import Books from '../containers/Books'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/iniciar-sesion" component={SingUp} />
                    <Route exact path="/iniciar-sesion/crear-cuenta" component={CreateAccount} />
                    <Route exact path="/categories/" component={Categories} /> 
                    <Route path="/libro/:numberCharacter" component={Books} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App
