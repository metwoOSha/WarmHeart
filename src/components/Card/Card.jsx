import { useSelector } from "react-redux";
import stub from "../../assets/img/NoImage.png";

import cls from "./Card.module.css";
import { useState } from "react";
import { useEffect } from "react";

export function Card({ image, name, size, price }) {
    const [delayedLoading, setDelayedLoading] = useState(false);
    const { loading } = useSelector((state) => state.products);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDelayedLoading(loading);
        }, 150);

        return () => clearTimeout(timeout);
    }, [loading]);
    return (
        <div onClick={() => console.log(123)}>
            <div className={cls.block}>
                {delayedLoading ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 200"
                    >
                        <circle
                            fill="none"
                            strokeOpacity="1"
                            stroke="#2C2C2C"
                            strokeWidth=".5"
                            cx="100"
                            cy="100"
                            r="0"
                        >
                            <animate
                                attributeName="r"
                                calcMode="spline"
                                dur="2"
                                values="1;80"
                                keyTimes="0;1"
                                keySplines="0 .2 .5 1"
                                repeatCount="indefinite"
                            ></animate>
                            <animate
                                attributeName="stroke-width"
                                calcMode="spline"
                                dur="2"
                                values="0;25"
                                keyTimes="0;1"
                                keySplines="0 .2 .5 1"
                                repeatCount="indefinite"
                            ></animate>
                            <animate
                                attributeName="stroke-opacity"
                                calcMode="spline"
                                dur="2"
                                values="1;0"
                                keyTimes="0;1"
                                keySplines="0 .2 .5 1"
                                repeatCount="indefinite"
                            ></animate>
                        </circle>
                    </svg>
                ) : !image ? (
                    <img src={stub} alt="carpets" />
                ) : (
                    <img src={image} alt="carpets" />
                )}

                <div onClick={() => console.log("add")} className={cls.add}>
                    <svg
                        width="38"
                        height="38"
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 36L19 2M36 19L2 19"
                            stroke="#FDFBF9"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>
            <div className={cls.textBlock}>
                <h3>{name}</h3>
                <div className={cls.priceBlock}>
                    <p>{size}</p>
                    <p>{`€${price}`}</p>
                </div>
            </div>
        </div>
    );
}
