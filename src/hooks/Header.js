import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import Context from "../utils/context";
const Header = () => {
    const context = useContext(Context);
    const styleObject = {padding: '5px'};
    return (
        <div>
            <Link to='/' style={styleObject}>
                Home
            </Link>
            <Link to='/profile' style={styleObject}>
                Profile
            </Link>
            <Link to='/hooksform' style={styleObject}>
                Hooks Form
            </Link>
            <Link to='/hookscontainer' style={{styleObject}}>
                Hooks Container
            </Link>
            <Link to='/privateroute' style={styleObject}>
                Private Route
            </Link>
            {!context.authState
                ? <button onClick={() => context.authObj.login()}>Login</button>
                : <button onClick={() => context.authObj.logout()}>Logout</button>
            }
        </div>
    )
};

export  default Header;
