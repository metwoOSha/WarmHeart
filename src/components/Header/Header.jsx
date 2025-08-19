import { NavLink } from "react-router-dom";

import cls from "./Header.module.css";

export function Header() {
    return (
        <header>
            <div className="container">
                <div className={cls.header}>
                    <nav className={cls.linksPages}>
                        <NavLink
                            to="/shop"
                            className={({ isActive }) =>
                                isActive ? `${cls.active}` : ""
                            }
                        >
                            Shop
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? `${cls.active}` : ""
                            }
                        >
                            About us
                        </NavLink>
                        <NavLink
                            to="/contacts"
                            className={({ isActive }) =>
                                isActive ? `${cls.active}` : ""
                            }
                        >
                            Contacts
                        </NavLink>
                    </nav>
                    <NavLink to="/" className={cls.logo}>
                        <h1>warm heart</h1>
                    </NavLink>
                    <nav className={cls.linksSearch}>
                        <a href="">Search</a>
                        <a href="">Cart (4)</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
