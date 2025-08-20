import { NavLink } from "react-router-dom";

import cls from "./Header.module.css";
import { useEffect, useState } from "react";
import { HamburgerMenu } from "../HamburgerMenu";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function toogleMenu() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const scrollBarWidth =
            window.innerWidth - document.documentElement.clientWidth;
        const doc = document.body.style;
        if (isOpen) {
            doc.overflow = "hidden";
            doc.paddingRight = scrollBarWidth + "px";
            ["section", "footer", "header"].forEach((tag) => {
                document.querySelectorAll(tag).forEach((el) => {
                    el.classList.add("active");
                });
            });
        } else {
            doc.overflow = "";
            doc.paddingRight = "";
            ["section", "footer", "header"].forEach((tag) => {
                document.querySelectorAll(tag).forEach((el) => {
                    el.classList.remove("active");
                });
            });
        }
        return () => {
            doc.overflow = "";
            doc.paddingRight = "";
        };
    }, [isOpen]);

    return (
        <header>
            {isOpen && <HamburgerMenu toogleMenu={toogleMenu} />}
            <div className="container">
                <div className={cls.header}>
                    <div className={cls.burger}>
                        <svg
                            width="42"
                            height="22"
                            viewBox="0 0 42 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 1H41"
                                stroke="#2C2C2C"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M1 11H31"
                                stroke="#2C2C2C"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M1 21H41"
                                stroke="#2C2C2C"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
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
