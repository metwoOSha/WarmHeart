import cls from "./Footer.module.css";

export function Footer() {
    return (
        <footer className={cls.footer}>
            <div className="container">
                <div className={cls.wrapper}>
                    <div>
                        <h2 className={cls.text}>warm heart</h2>
                        <div></div>
                    </div>
                    <div>
                        <h2>Info</h2>
                        <div className={cls.links}>
                            <a href="#">About us</a>
                            <a href="#">Contacts</a>
                            <a href="#">Shop</a>
                            <a href="#">FAQ</a>
                        </div>
                    </div>
                    <div>
                        <h2>Customer service</h2>
                        <div className={cls.links}>
                            <a href="#">Delivery and pickup</a>
                            <a href="#">Payment</a>
                            <a href="#">Exchange and return</a>
                            <a href="#">Help</a>
                        </div>
                    </div>
                    <div>
                        <h2>Useful information</h2>
                        <div className={cls.links}>
                            <a href="#">Suppliers</a>
                            <a href="#">Buying guides</a>
                            <a href="#">Principle of operation</a>
                            <a href="#">Press service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
