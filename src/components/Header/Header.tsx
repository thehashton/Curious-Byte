import React from 'react';
import scss from './Header.scss';
import { HeaderProps } from './Header.types';

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const {className = ''} = props;

    return (
        <div className={`${scss.header} ${className}`}>
            <div className={scss.inner}>
                <div className={scss.logo}>Curious Byte</div>
                    <ul className={scss.menu}>
                        <li className={scss.link}><a href="#About">About</a></li>
                        <li className={scss.link}><a href="#Courses">Courses</a></li>
                        <li className={scss.link}><a href="#Contact">Contact</a></li>
                    </ul>
                </div>
        </div>
    )
}

export default Header;