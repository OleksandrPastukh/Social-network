import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import SelectedLink from "./SelectedLink";
import Friends from "./Friends/Friends";

const Navbar = () => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={SelectedLink()}> Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={SelectedLink()}> Dialogs </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={SelectedLink()}> News </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={SelectedLink()}> Music </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={SelectedLink()}> Settings </NavLink>
            </div>
            <div>
                <Friends />
            </div>
        </nav>
    )
}

export default Navbar;