import React from 'react';
import './style.css';
import { ReactComponent as Logo } from '../../images/logo.svg';

const Header = () => {
    return (
        <header className="container-header">
            <a href="./" className="logo"> <Logo /></a>
            <ul className="content-header">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
            <button className="btn-main"> Request Invite</button>
        </header>
    );
}

export default Header;
