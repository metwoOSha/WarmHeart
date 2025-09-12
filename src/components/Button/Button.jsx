import cls from "./Button.module.css";

export function Button({ children, variant, type = "button", onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={variant ? `${cls.button} ${cls[variant]}` : cls.button}
        >
            {children}
        </button>
    );
}
