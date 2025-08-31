import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../store/slices/productsSlice";

import { Card } from "../../../../components/Card/Card";

import cls from "./PopularSection.module.css";

export function PopularSection() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(
        window.innerWidth < 380 ? 1 : window.innerWidth < 768 ? 2 : 3
    );
    const [pagination, setPagination] = useState([]);

    const dispatch = useDispatch();

    const { list, loading, totalCount } = useSelector(
        (state) => state.products
    );

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 380) {
                setLimit(1);
            } else if (window.innerWidth < 768) {
                setLimit(2);
            } else {
                setLimit(3);
            }
        }
        dispatch(fetchProducts({ page, limit, to: "popular" }));

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [dispatch, page, limit]);

    useEffect(() => {
        const pagesCount = Math.ceil(totalCount / limit);
        const pagesArray = new Array(pagesCount).fill(0).map((_, i) => i + 1);
        setPagination(pagesArray);
    }, [totalCount, limit]);

    return (
        <section className={cls.popular}>
            <div className="container">
                <h2>Popular products</h2>
                <div className={cls.wrapper}>
                    {list.map((item) => (
                        <Card
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            size={item.size}
                            price={item.price}
                        />
                    ))}
                </div>
                <div className={cls.paginationBlock}>
                    <ul className={cls.pagination}>
                        {pagination.map((item) => (
                            <li key={item}>
                                <div
                                    className={`${cls.dots} ${
                                        item === page ? cls.dotsActive : ""
                                    }`}
                                    onClick={() => setPage(item)}
                                ></div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
