import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import cls from "./SkeletonCard.module.css";
export function SkeletonCard() {
    return (
        <SkeletonTheme baseColor="#f7ede4" highlightColor="#e0d8d07d">
            <div>
                <div className={cls.image}>
                    <Skeleton height="100%" style={{ borderRadius: "25px" }} />
                </div>

                <div className={cls.info}>
                    <Skeleton />
                    <Skeleton />
                </div>
            </div>
        </SkeletonTheme>
    );
}
