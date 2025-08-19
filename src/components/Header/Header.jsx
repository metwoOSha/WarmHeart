import { NavLink } from "react-router-dom";

import cls from "./Header.module.css";

export function Header() {
    return (
        <div className="container">
            <header className={cls.header}>
                <nav className={cls.linksPages}>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/about">About us</NavLink>
                    <NavLink to="/contacts">Contacts</NavLink>
                </nav>
                <NavLink to="/" className={cls.logo}>
                    <h1>warm heart</h1>
                </NavLink>
                <nav className={cls.linksSearch}>
                    <a href="">Search</a>
                    <a href="">Cart (4)</a>
                </nav>
            </header>
        </div>
    );
}
