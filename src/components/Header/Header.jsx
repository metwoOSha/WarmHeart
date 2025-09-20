import { NavLink } from "react-router-dom";

import cls from "./Header.module.css";
import { useEffect, useState } from "react";
import { HamburgerMenu } from "../HamburgerMenu";
import { useSelector } from "react-redux";
import { Search } from "../Search/Search";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    function toogleMenu() {
        setIsOpen((prev) => !prev);
    }

    function toggleSearch() {
        setIsOpen(false);
        setIsSearchOpen(true);
    }

    const { items } = useSelector((state) => state.cart);

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
        <header className={cls.stickyHeader}>
            {isOpen && (
                <HamburgerMenu
                    toogleMenu={toogleMenu}
                    toggleSearch={toggleSearch}
                />
            )}
            <div className="container">
                <div className={cls.header}>
                    <div className={cls.burger} onClick={toogleMenu}>
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
                            to="/"
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
                    <div to="/" className={cls.logo}>
                        <h1 id={cls.mainText}>warm heart</h1>
                        <h1 id={cls.wh}>WH</h1>
                    </div>
                    <nav className={cls.linksSearch}>
                        <button onClick={() => setIsSearchOpen(true)}>
                            Search
                        </button>
                        {isSearchOpen && (
                            <Search onClose={() => setIsSearchOpen(false)} />
                        )}
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                isActive ? `${cls.active}` : ""
                            }
                        >
                            Cart ({items.length})
                        </NavLink>
                    </nav>
                    <nav
                        id={cls.svgIcons}
                        onClick={() => setIsSearchOpen(true)}
                    >
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            id={cls.searchIcon}
                        >
                            <path
                                d="M12.8333 22.1667C17.988 22.1667 22.1667 17.988 22.1667 12.8333C22.1667 7.67868 17.988 3.5 12.8333 3.5C7.67868 3.5 3.5 7.67868 3.5 12.8333C3.5 17.988 7.67868 22.1667 12.8333 22.1667Z"
                                stroke="#2C2C2C"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M24.5008 24.5L19.4258 19.425"
                                stroke="#2C2C2C"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                isActive ? `${cls.active}` : ""
                            }
                        >
                            <div className={cls.cart}>
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7 2.33333L3.5 7V23.3333C3.5 23.9522 3.74583 24.5457 4.18342 24.9833C4.621 25.4208 5.21449 25.6667 5.83333 25.6667H22.1667C22.7855 25.6667 23.379 25.4208 23.8166 24.9833C24.2542 24.5457 24.5 23.9522 24.5 23.3333V7L21 2.33333H7Z"
                                        stroke="#2C2C2C"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M3.5 7H24.5"
                                        stroke="#2C2C2C"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M18.6673 11.6667C18.6673 12.9043 18.1757 14.0913 17.3005 14.9665C16.4253 15.8417 15.2383 16.3333 14.0007 16.3333C12.763 16.3333 11.576 15.8417 10.7008 14.9665C9.82565 14.0913 9.33398 12.9043 9.33398 11.6667"
                                        stroke="#2C2C2C"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span>({items.length})</span>
                            </div>
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
}
