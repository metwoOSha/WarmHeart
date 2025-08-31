import cls from "./ShopHeader.module.css";

export function ShopHeader() {
    return (
        <section className={cls.header}>
            <div className="container">
                <div className={cls.wrapper}>
                    <h2>Shop</h2>
                    <p>
                        In our store you will find a large number of
                        high-quality blankets that will help make your home more
                        comfortable and warm your life.
                    </p>
                </div>
            </div>
        </section>
    );
}
