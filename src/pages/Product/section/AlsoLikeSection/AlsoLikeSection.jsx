import { Popular } from "../../../../components/Popular/Popular";

import cls from "./AlsoLike.module.css";

export function AlsoLikeSection() {
    return (
        <section className={cls.also}>
            <Popular text="You may also like" />
        </section>
    );
}
