import "animate.css";
import { Hamster } from "../Hamster/Hamster";

import cls from "./Loading.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

export function Loading() {
    const { loading } = useSelector((state) => state.products);
    const [delayedLoading, setDelayedLoading] = useState(false);

    useEffect(() => {
        if (delayedLoading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [delayedLoading]);

    useEffect(() => {
        let timeout;

        if (loading) {
            timeout = setTimeout(() => {
                setDelayedLoading(true);
            }, 150);
        } else {
            clearTimeout(timeout);
            setDelayedLoading(false);
        }

        return () => clearTimeout(timeout);
    }, [loading]);

    if (!delayedLoading) return null;

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
