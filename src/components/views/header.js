import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../utils/context';

const Header = () => {
    const context = useContext(Context);

    return(
        <div>
            <Link to='/' style={{padding: '5px'}}>
                Home
            </Link>
            <Link to='/basics' style={{padding: '5px'}}>
                basics
            </Link>
            <Link to='/hooksform' style={{padding: '5px'}}>
                Hooks Form
            </Link>

        </div>
    )};





export default Header;
