import cls from "./Button.module.css";

export function Button({ children, variant }) {
    return (
        <button className={`${cls.button} ${cls[variant]}`}>{children}</button>
    );
}
