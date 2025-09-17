import { Popular } from "../../../../components/Popular/Popular";

import cls from "./PopularSection.module.css";

export function PopularSection() {
    return (
        <section className={cls.popular}>
            <Popular text="Popular products" />
        </section>
    );
}
