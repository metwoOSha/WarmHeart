import { NavLink } from "react-router-dom";

import cls from "./Header.module.css";
import { useEffect, useState } from "react";
import { HamburgerMenu } from "../HamburgerMenu";

export function Header() {
    const [isOpen, setIsOpen] = useState(true);

    function toogleMenu() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const scrollBarWidth =
            window.innerWidth - document.documentElement.clientWidth;
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = scrollBarWidth + "px";
            document.querySelectorAll("section").forEach((section) => {
                section.classList.add("active");
            });
            document.querySelectorAll("footer").forEach((section) => {
                section.classList.add("active");
            });
        } else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
            document.querySelectorAll("section").forEach((section) => {
                section.classList.remove("active");
            });
            document.querySelectorAll("footer").forEach((section) => {
                section.classList.remove("active");
            });
        }
        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [isOpen]);

    return (
        <header>
            {isOpen && <HamburgerMenu toogleMenu={toogleMenu} />}
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
