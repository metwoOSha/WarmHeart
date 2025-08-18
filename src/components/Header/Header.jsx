import cls from "./Header.module.css";

export function Header() {
    return (
        <div className="container">
            <header className={cls.header}>
                <nav className={cls.linksPages}>
                    <a href="">Shop</a>
                    <a href="">About us</a>
                    <a href="">Contacts</a>
                </nav>
                <h1>warm heart</h1>
                <nav className={cls.linksSearch}>
                    <a href="">Search</a>
                    <a href="">Cart (4)</a>
                </nav>
            </header>
        </div>
    );
}
