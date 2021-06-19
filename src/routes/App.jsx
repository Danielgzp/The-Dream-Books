import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Layout from '../components/Layout'
import Index from '../containers/Index'
import SingUp from '../containers/SingUp'
import CreateAccount from '../containers/CreateAccount'
import Books from '../containers/Books'
import NotFound from '../containers/NotFound'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/iniciarsesion" component={SingUp} />
                    <Route exact path="/crearcuenta" component={CreateAccount} />
                    <Route exact path ="/libro" componet={Books} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App
