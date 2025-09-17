import { NavLink } from "react-router-dom";

import cls from "./Navigate.module.css";

export function Navigate({ item }) {
    return (
        <nav className={cls.flex}>
            <NavLink to="/">Home</NavLink>
            <span>/</span>
            <NavLink to="/shop">Shop</NavLink>
            <span>/</span>
            <div>{item}</div>
        </nav>
    );
}
