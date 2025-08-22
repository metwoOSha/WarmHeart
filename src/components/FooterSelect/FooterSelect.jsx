import cls from "./FooterSelect.module.css";

export function FooterSelect() {
    return (
        <div className={cls.footerSelect}>
            <div className={cls.faqDrawer}>
                <input
                    className={cls.faqDrawerTrigger}
                    id="faqDrawer"
                    type="checkbox"
                />
                <label className={cls.faqDrawerTitle} htmlFor="faqDrawer">
                    Info
                </label>
                <div className={cls.faqDrawerContentWrapper}>
                    <div className={cls.faqDrawerContent}>
                        <a href="#">About us</a>
                        <a href="#">Contacts</a>
                        <a href="#">Shop</a>
                        <a href="#">FAQ</a>
                    </div>
                </div>
            </div>

            <div className={cls.faqDrawer}>
                <input
                    className={cls.faqDrawerTrigger}
                    id="faqDrawer2"
                    type="checkbox"
                />
                <label className={cls.faqDrawerTitle} htmlFor="faqDrawer2">
                    Customer service
                </label>
                <div className={cls.faqDrawerContentWrapper}>
                    <div className={cls.faqDrawerContent}>
                        <a href="#">Delivery and pickup</a>
                        <a href="#">Payment</a>
                        <a href="#">Exchange and return</a>
                        <a href="#">Help</a>
                    </div>
                </div>
            </div>

            <div className={cls.faqDrawer}>
                <input
                    className={cls.faqDrawerTrigger}
                    id="faqDrawer3"
                    type="checkbox"
                />
                <label className={cls.faqDrawerTitle} htmlFor="faqDrawer3">
                    Useful information
                </label>
                <div className={cls.faqDrawerContentWrapper}>
                    <div className={cls.faqDrawerContent}>
                        <a href="#">Suppliers</a>
                        <a href="#">Buying guides</a>
                        <a href="#">Principle of operation</a>
                        <a href="#">Press service</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
