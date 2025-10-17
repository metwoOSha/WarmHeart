import { useDispatch, useSelector } from "react-redux";
import { Counter } from "../Counter/Counter";
import cls from "./CartList.module.css";

import { removeFromCart } from "../../store/slices/cartSlice";

export function CartList() {
    const { items } = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    function removeProduct(id) {
        dispatch(removeFromCart(id));
    }

    return (
        <>
            {items.length > 0 && (
                <>
                    <div className={cls.line}></div>
                    {items.map((item) => (
                        <div key={item.id}>
                            <div className={cls.wrapper}>
                                <div className={cls.image}>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className={cls.propertyBlock}>
                                    <div className={cls.textBlock}>
                                        <h3>{item.name}</h3>
                                        <p>{`${item.size}, ${item.color}`}</p>
                                    </div>
                                    <Counter itemId={item.id} />
                                </div>
                                <div className={cls.priceBlock}>
                                    <span>€{item.price * item.quantity}</span>
                                </div>
                                <span className={cls.deleteBtn} onClick={() => removeProduct(item.id)}>
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            opacity="0.3"
                                            d="M1 1L11 11M11 1L1 11"
                                            stroke="#2C2C2C"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div className={cls.line}></div>
                        </div>
                    ))}
                </>
            )}
        </>
    );
}
