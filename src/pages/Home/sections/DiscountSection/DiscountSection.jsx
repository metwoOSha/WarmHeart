import { Button } from "../../../../components/Button/Button";
import cls from "./DiscountSection.module.css";

export function DiscountSection() {
    return (
        <section className={cls.discount}>
            <div className="container">
                <div className={cls.discountWrapper}>
                    <div className={cls.textBlock}>
                        <h2>Get 20% off your first purchase</h2>
                        <p>
                            Subscribe to our newsletter and get a promo code for
                            a 20% discount! You will receive only the most
                            important and relevant news.
                        </p>
                    </div>
                    <form className={cls.inputBlock}>
                        <input
                            type="email"
                            placeholder="Email address"
                            required
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
