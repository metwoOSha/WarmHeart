import cls from "./ComfortSection.module.css";

import blanket from "../../../../assets/img/blanket.png";
import { Button } from "../../../../components/Button";

export function ComfortSection() {
    return (
        <section className={cls.comfort}>
            <div className="container">
                <div className={cls.comfortWrapper}>
                    <div className={cls.comfortContainer}>
                        <h2>Create comfort in home</h2>
                        <p>
                            A blanket is a simple and versatile thing that can
                            make relaxing after a hard day's work much more
                            comfortable.
                        </p>
                    </div>
                    <div className={cls.sideneertContainer}>
                        <div>
                            <img src={blanket} alt="blanket" class={cls.img} />
                        </div>
                        <div className={cls.sideneertBlock}>
                            <h2>Sideneert</h2>
                            <p>
                                It is made from soft New Zealand wool, which is
                                naturally stain-repellent.
                                <br />
                                <br />
                                This bedspread is an easy way to freshen up your
                                bedroom decor. Plus, it can be used as an extra
                                blanket if you get cold.
                            </p>
                            <Button variant="white">Go to shop</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
