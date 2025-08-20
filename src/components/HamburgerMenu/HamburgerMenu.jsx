import { NavLink } from "react-router-dom";
import cls from "./HamburgerMenu.module.css";

export function HamburgerMenu({ toogleMenu }) {
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
                <div className={cls.wrapper}>
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
                </div>
            </nav>
        </div>
    );
}
