import bed from "../../../../assets/img/bed.png";
import wrapped from "../../../../assets/img/wrapped.png";
import carpets from "../../../../assets/img/carpets.png";

import cls from "./FollowUsSection.module.css";

export function FollowUsSection() {
    return (
        <section className={cls.followUs}>
            <div className="container">
                <div className={cls.followUsContainer}>
                    <h2>Follow us on instagram</h2>
                    <div className={cls.followUsWrapper}>
                        <div className={cls.bedBlock}>
                            <img src={bed} alt="bed" />
                            <p>
                                On our Instagram, we regularly share the most
                                interesting news. We also tell you about all our
                                new products.
                            </p>
                        </div>
                        <img src={wrapped} alt="wrapped" />
                        <div className={cls.carpetsBlock}>
                            <img src={carpets} alt="carpets" />
                            <p>@warm.heart</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
