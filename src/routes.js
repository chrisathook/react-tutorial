import React, { Suspense} from 'react';
import {Router, Route, Switch} from 'react-router';
import history from './components/utils/history';
import Header from './components/views/header';
import Home from './components/views/home';
import HooksContainer from './components/views/hooks_container';
import HooksForm from "./components/views/hooks_form";

const Routes = () => {

    const LazyTest = React.lazy( ()=> import('./components/views/lazy_test'));

    const BasicContainer = () => {
        return (
            <React.Fragment>
                <HooksContainer/>
                <hr/>
                <HooksContainer/>
            </React.Fragment>
        )
    };

    const LazyLoadWrapper = ()=>{

        return (
            <React.Fragment>
                <Suspense fallback={<div>LOADING ...</div>}>
                <LazyTest/>
                </Suspense>
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
                        <Route path='/lazyload' component={LazyLoadWrapper} />
                    </Switch>
                </div>
            </Router>

        </div>
    )
};
export default Routes;
