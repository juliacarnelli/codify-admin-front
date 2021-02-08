import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import GlobalStyle from './assets/GlobalStyles'
import * as Pages from './pages';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path='/sign-in' component={Pages.AdminSignIn} />
                <Route path='/' exact component={Pages.Home} />
            </Switch>
        </Router>
    );
}