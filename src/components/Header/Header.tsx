import React from 'react';
import scss from './Header.scss';
import { HeaderProps } from './Header.types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const {className = ''} = props;

    return (
        <div className={`${scss.header} ${className}`}>
            <div className={scss.inner}>
                <div className={scss.logo}><Link to="/">Curious Byte</Link></div>
                    <ul className={scss.menu}>
                        <li className={scss.link}><Link to="/about">About</Link></li>
                        <li className={scss.link}><Link to="/courses">Courses</Link></li>
                        <li className={scss.link}><Link to="/contact">Contact</Link></li>
                    </ul>
                <div className={scss.auth}>
                    <a href="#signin">Sign in</a>
                </div>
            </div>
        </div>
    )
}

export default Header;