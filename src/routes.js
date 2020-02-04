import React, {useContext, useEffect} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router';
import history from './components/utils/history';
import Context from './components/utils/context';
import Header from './components/views/header';
import Home from './components/views/home';
import HooksContainer from './components/views/hooks_container';
import HooksForm from "./components/views/hooks_form";
const Routes = () => {
    const context = useContext(Context);
    const BasicContainer = () => {
        return (
            <React.Fragment>
                <HooksContainer/>
                <hr/>
                <HooksContainer/>
            </React.Fragment>
        )
    };
    return (
        <div>
            <Router history={history}>
                <Header/>
                <br/>
                <br/>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/basics' component={BasicContainer}/>
                        <Route path='/hooksform' component={HooksForm} />
                    </Switch>
                </div>
            </Router>

        </div>
    )
};
export default Routes;
