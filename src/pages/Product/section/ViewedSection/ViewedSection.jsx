import { Viewed } from "../../../../components/Viewed/Viewed";
import cls from "./ViewedSection.module.css";

export function ViewedSection() {
    return (
        <section className={cls.viewed}>
            <Viewed />
        </section>
    );
}
