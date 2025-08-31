import "animate.css";
import { Hamster } from "../Hamster/Hamster";

import cls from "./Loading.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export function Loading() {
    const { loading } = useSelector((state) => state.products);

    useEffect(() => {
        if (loading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [loading]);

    return (
        <div className={cls.backdrop}>
            <div className={cls.wrapper}>
                <Hamster />
                <p
                    className="animate__animated animate__pulse"
                    style={{
                        animationDuration: "2.5s",
                        animationIterationCount: "infinite",
                    }}
                >
                    Looking for the best blankets for you...
                </p>
            </div>
        </div>
    );
}
