import { useSelector } from "react-redux";
import { Button } from "../../components/Button";
import { CartList } from "../../components/CartList/CartList";
import cls from "./Cart.module.css";
import { useMemo } from "react";

export function Cart() {
    const { items } = useSelector((state) => state.cart);

    const totalPrice = useMemo(() => {
        if (items) {
            return items.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );
        } else {
            return 0;
        }
    }, [items]);

    return (
        <section className={cls.cart}>
            <div className="container">
                <h2 className={cls.text}>Shopping cart</h2>
                <div className={cls.flex}>
                    <div style={{ marginTop: "30px" }}>
                        <CartList />
                    </div>
                    <div className={cls.order}>
                        <h3>Order summary</h3>
                        <div className={cls.wrapper}>
                            <div className={cls.flex}>
                                <span>Subtotal:</span>
                                <span>€{totalPrice}</span>
                            </div>
                            <div className={cls.flex}>
                                <span>Shipping:</span>
                                <span>free shipping</span>
                            </div>
                            <div className={cls.flex}>
                                <span>Total:</span>
                                <span>€{totalPrice}</span>
                            </div>
                        </div>
                        <Button>Checkout</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
