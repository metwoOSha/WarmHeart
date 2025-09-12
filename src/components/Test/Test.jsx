import cls from "./Pagination.module.css";

import { useMemo } from "react";

export function Test({ pagination, page, setPage, number }) {
    console.log(setPage);
    const totalPages = pagination.length;
    const delta = 2;

    const left = useMemo(() => page - delta, [page]);
    const right = useMemo(() => page + delta + 1, [page]);

    const pageGroup = useMemo(() => {
        const range = [];
        const rangeWithDots = [];
        let l;

        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= left && i < right)) {
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
    }, [left, right]);

    return (
        <div className={cls.paginationBlock}>
            <ul className={number ? cls.paginationNumber : cls.pagination}>
                {pageGroup.map((item) => (
                    <li key={item}>
                        <div
                            className={`${number ? cls.dotsNumber : cls.dots} ${
                                item === page
                                    ? number
                                        ? cls.dotsActiveNumber
                                        : cls.dotsActive
                                    : ""
                            }`}
                            onClick={() => item !== "..." && setPage(item)}
                        >
                            {number ? item : item === "..." ? "..." : null}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
