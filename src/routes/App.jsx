import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Layout from '../components/Layout'
import Index from '../containers/Index'
import SingUp from '../containers/SingUp'
import CreateAccount from '../containers/CreateAccount'
import Books from '../containers/Books'
import NotFound from '../containers/NotFound'
import Categories  from '../containers/Categories'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/iniciar-sesion" component={SingUp} />
                    <Route exact path="/iniciar-sesion/crear-cuenta" component={CreateAccount} />
                    <Route exact path="/categories/" component={Categories} /> 
                    <Route exact path ="/libro" component={Books} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App
