import { NavLink } from "react-router-dom";
import cls from "./HamburgerMenu.module.css";
import { useState } from "react";
import { Search } from "../Search/Search";

export function HamburgerMenu({ toogleMenu, toggleSearch }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    return (
        <div>
            <div className={cls.overlay}></div>
            <nav className={cls.hamburger}>
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={toogleMenu}
                >
                    <path
                        d="M1.85698 30.1421L30.1412 1.85786M30.1412 30.1421L1.85698 1.85786"
                        stroke="#2C2C2C"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
                <div className={cls.flex}>
                    <div className={cls.wrapper}>
                        <NavLink
                            onClick={() => toogleMenu(false)}
                            to="/shop"
                            className={({ isActive }) =>
                                isActive ? `${cls.active}` : ""
                            }
                        >
                            Shop
                        </NavLink>
                        <NavLink
                            onClick={() => toogleMenu(false)}
                            to="/"
                            className={({ isActive }) =>
                                isActive ? `${cls.active}` : ""
                            }
                        >
                            About us
                        </NavLink>
                        <NavLink
                            onClick={() => toogleMenu(false)}
                            to="/contacts"
                            className={({ isActive }) =>
                                isActive ? `${cls.active}` : ""
                            }
                        >
                            Contacts
                        </NavLink>
                    </div>
                    <div className={cls.wrapper}>
                        <NavLink
                            onClick={() => toogleMenu(false)}
                            to="/cart"
                            className={({ isActive }) =>
                                isActive ? `${cls.active}` : ""
                            }
                        >
                            Cart
                        </NavLink>
                        <button onClick={toggleSearch}>Search</button>
                        {isSearchOpen && (
                            <Search onClose={() => setIsSearchOpen(false)} />
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}
