import cls from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuantity } from "../../store/slices/cartSlice";
import { useState } from "react";

export function Counter({ itemId, counter, setCounter }) {
    const dispatch = useDispatch();

    const quantity = useSelector(
        (state) =>
            state.cart.items.find((item) => item.id === itemId)?.quantity || 1
    );

    const decrementCount = () => {
        if (itemId) {
            dispatch(decreaseQuantity(itemId));
        } else {
            setCounter((prev) => prev - 1);
        }
    };

    const incrementCount = () => {
        if (itemId) {
            dispatch(addToCart({ id: itemId, quantity: 1 }));
        } else {
            setCounter((prev) => prev + 1);
        }
    };

    return (
        <div className={cls.countBlock}>
            <div
                onClick={decrementCount}
                className={cls.decrement}
                style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <svg
                    width="24"
                    height="4"
                    viewBox="0 0 24 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M22 2L2 2"
                        stroke="#2C2C2C"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
            <span className={cls.count}>{itemId ? quantity : counter}</span>
            <div onClick={incrementCount} className={cls.increment}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 22L12 2M22 12L2 12"
                        stroke="#2C2C2C"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        </div>
    );
}
