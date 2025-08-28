import carpets from "../../../../assets/img/carpets_1.png";

import cls from "./PopularSection.module.css";

export function PopularSection() {
    return (
        <section className={cls.popular}>
            <div className="container">
                <h2>Popular products</h2>
                <div className={cls.wrapper}>
                    <div>
                        <div className={cls.block}>
                            <img src="/image/dabildun.png" alt="carpets" />
                            <div className={cls.add}>
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
                            <h3>Gerhild</h3>
                            <div className={cls.priceBlock}>
                                <p>130x170 cm</p>
                                <p>€90</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={cls.block}>
                            <img src={carpets} alt="carpets" />
                        </div>
                        <div className={cls.textBlock}>
                            <h3>Gerhild</h3>
                            <div className={cls.priceBlock}>
                                <p>130x170 cm</p>
                                <p>€90</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={cls.block}>
                            <img src={carpets} alt="carpets" />
                        </div>
                        <div className={cls.textBlock}>
                            <h3>Gerhild</h3>
                            <div className={cls.priceBlock}>
                                <p>130x170 cm</p>
                                <p>€90</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
