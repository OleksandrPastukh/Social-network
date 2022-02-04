import React from "react";
import s from './Header.module.css'
import HeaderLogo from '../../assets/emojisky.com-599883.png'

const Header = () => {
    return (
        <header className={s.header}>
            <img src={HeaderLogo} alt="logo"/>
        </header>
    )
}

export default Header;