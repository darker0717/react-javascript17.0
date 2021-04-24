import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Home from './pages/home'
import Common from './common'
import Admin from './admin'
export default class Router extends React.Component {

    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        {/* <Route path="/login" component={Login} /> */}
                        <Route path="/common" render={() =>
                            <Common>
                                {/* <Route path="/common/order/detail/:orderId" component={OrderDetail} /> */}
                            </Common>
                        }
                        />
                        <Route path="/" render={() =>
                            <Admin>
                                <Switch>
                                    <Route path='/home' component={Home} />
                                </Switch>
                            </Admin>
                        } />
                        <Redirect to="/home" />
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}