import { useMemo } from "react";
import cls from "./Pagination.module.css";

export function Pagination({
    setIsPage,
    isPage,
    totalCount,
    limit,
    number,
    loading,
}) {
    const delta = 2;
    const last = Math.ceil(totalCount / limit);

    const left = useMemo(() => isPage - delta, [isPage]);
    const right = useMemo(() => isPage + delta + 1, [isPage]);

    const pageGroup = useMemo(() => {
        const range = [];
        const rangeWithDots = [];
        let l;

        if (number) {
            for (let i = 1; i <= last; i++) {
                if (i === 1 || i === last || (i >= left && i < right)) {
                    range.push(i);
                }
            }

            for (let i of range) {
                if (l) {
                    if (i - l === 2) {
                        rangeWithDots.push(l + 1);
                    } else if (i - l !== 1) {
                        rangeWithDots.push("...");
                    }
                }

                rangeWithDots.push(i);
                l = i;
            }

            return rangeWithDots;
        } else {
            for (let i = 1; i <= last; i++) {
                range.push(i);
            }

            return range;
        }
    }, [left, right, limit]);

    const handleSelect = (page, index) => {
        if (page === "...") {
            if (index === 1) {
                setIsPage(left);
            } else {
                setIsPage(right);
            }
        } else {
            setIsPage(page);
        }
        if (number) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div
            className={
                loading
                    ? `${cls.paginationBlock} ${cls.visibility}`
                    : cls.paginationBlock
            }
        >
            <ul className={number ? cls.paginationNumber : cls.pagination}>
                {pageGroup.map((page, index) => (
                    <li
                        key={index}
                        onClick={() => handleSelect(page, index)}
                        className={`${number ? cls.dotsNumber : cls.dots} ${
                            page === isPage
                                ? number
                                    ? cls.dotsActiveNumber
                                    : cls.dotsActive
                                : ""
                        }`}
                    >
                        {number ? page : null}
                    </li>
                ))}
            </ul>
        </div>
    );
}
