import stub from "../../assets/img/NoImage.png";

import cls from "./Card.module.css";

export function Card({ image, name, size, price }) {
    return (
        <div onClick={() => console.log(123)}>
            <div className={cls.block}>
                {image ? (
                    <img src={image} alt="carpets" />
                ) : (
                    <img src={stub} alt="carpets" />
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
