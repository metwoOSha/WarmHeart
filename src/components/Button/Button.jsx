import cls from "./Button.module.css";

export function Button({ children, variant, type = "button" }) {
    return (
        <button type={type} className={`${cls.button} ${cls[variant]}`}>
            {children}
        </button>
    );
}
