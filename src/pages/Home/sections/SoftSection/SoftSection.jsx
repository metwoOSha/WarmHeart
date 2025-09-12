import { Link } from "react-router-dom";
import { Button } from "../../../../components/Button/Button";
import { Slider } from "../../../../components/Slider/Slider";
import cls from "./SoftSection.module.css";

export function SoftSection() {
    return (
        <section className={cls.soft}>
            <div className="container">
                <div className={cls.flex}>
                    <div className={cls.textBlock}>
                        <h2>Soft plaids for your comfort</h2>
                        <p>
                            Throw a blanket over your shoulders or place it on
                            the arm of the sofa, and the atmosphere in the house
                            will be warmer.
                        </p>
                        <Link to="/shop">
                            <Button>Shop now</Button>
                        </Link>
                    </div>
                    <div className={cls.block}>
                        <Slider />
                    </div>
                </div>
            </div>
        </section>
    );
}
