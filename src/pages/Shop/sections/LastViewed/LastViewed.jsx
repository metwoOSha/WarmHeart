import cls from "./LastViewed.module.css";

import carpets from "../../../../assets/img/carpets_1.png";

export function LastViewed() {
    return (
        <section className={cls.last}>
            <div className="container">
                <h2>Last viewed</h2>
                <div className={cls.wrapper}>
                    <div className={cls.block}>
                        <img src={carpets} alt="carpets" />
                    </div>
                    <div className={cls.block}>
                        <img src={carpets} alt="carpets" />
                    </div>
                    <div className={cls.block}>
                        <img src={carpets} alt="carpets" />
                    </div>
                    <div className={cls.block}>
                        <img src={carpets} alt="carpets" />
                    </div>
                </div>
            </div>
        </section>
    );
}
