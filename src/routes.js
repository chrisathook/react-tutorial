import React, { useContext, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import history from './components/utils/history';
import Context from './components/utils/context'

import HooksContainer from './components/views/hooks_container';

const Routes = () =>{
    const context = useContext(Context);

    return (
        <div>
            <HooksContainer/>
            <br/>
            <HooksContainer/>
        </div>
    )
};
export default Routes;
