import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../store/slices/productsSlice";

import { Card } from "../../../../components/Card/Card";

import cls from "./PopularSection.module.css";
import { Pagination } from "../../../../components/Pagination/Pagination";
import { SkeletonCard } from "../../../../components/SkeletonCard/SkeletonCard";

export function PopularSection() {
    const [isPage, setIsPage] = useState(1);
    const [limit, setLimit] = useState(
        window.innerWidth <= 380 ? 1 : window.innerWidth <= 768 ? 2 : 3
    );
    const [delayedLoading, setDelayedLoading] = useState(false);

    const dispatch = useDispatch();

    const { list, loading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts({ to: "blankets" }));
    }, [dispatch, isPage, limit]);

    const popularList = list.filter((item) => item.popular === true);
    const totalCount = popularList.length;

    useEffect(() => {
        function handleResize() {
            let newLimit;
            if (window.innerWidth <= 380) {
                newLimit = 1;
            } else if (window.innerWidth <= 768) {
                newLimit = 2;
            } else {
                newLimit = 3;
            }

            setLimit((prevLimit) => {
                if (prevLimit !== newLimit) {
                    setIsPage(1);
                    return newLimit;
                }
                return prevLimit;
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [limit]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDelayedLoading(loading);
        }, 100);

        return () => clearTimeout(timeout);
    }, [loading]);

    return (
        <section className={cls.popular}>
            <div className="container">
                <h2>Popular products</h2>
                <div className={cls.wrapper}>
                    {delayedLoading
                        ? Array(limit)
                              .fill(0)
                              .map((_, index) => <SkeletonCard key={index} />)
                        : popularList
                              .slice((isPage - 1) * limit, isPage * limit)
                              .map((item) => (
                                  <Card
                                      key={item.id}
                                      id={item.id}
                                      image={item.image}
                                      name={item.name}
                                      size={item.size}
                                      price={item.price}
                                  />
                              ))}
                </div>
                {totalCount > limit && (
                    <Pagination
                        setIsPage={setIsPage}
                        isPage={isPage}
                        limit={limit}
                        totalCount={totalCount}
                    />
                )}
            </div>
        </section>
    );
}
