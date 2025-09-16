import cls from "./ListProducts.module.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../store/slices/productsSlice";
import { useEffect, useState } from "react";
import { Card } from "../../../../components/Card/Card";
import { Pagination } from "../../../../components/Pagination";
import { SkeletonCard } from "../../../../components/SkeletonCard/SkeletonCard";

export function ListProducts() {
    const [isPage, setIsPage] = useState(1);
    const [limit, setLimit] = useState(3);
    const [delayedLoading, setDelayedLoading] = useState(false);

    const dispatch = useDispatch();

    const { list, loading, error, totalCount } = useSelector(
        (state) => state.products
    );

    useEffect(() => {
        dispatch(fetchProducts({ isPage, limit, to: "blankets" }));
    }, [dispatch, isPage, limit]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDelayedLoading(loading);
        }, 100);

        return () => clearTimeout(timeout);
    }, [loading]);

    return (
        <section className={cls.list}>
            <div className="container">
                <div className={cls.wrapper}>
                    {delayedLoading
                        ? Array(limit)
                              .fill(0)
                              .map((_, index) => <SkeletonCard key={index} />)
                        : list.map((item) => (
                              <Card
                                  key={item.id}
                                  id={item.id}
                                  image={item.image}
                                  name={item.name}
                                  size={item.size}
                                  price={item.price}
                                  color={item.color}
                              />
                          ))}
                </div>
                {totalCount > 0 && limit && (
                    <Pagination
                        setIsPage={setIsPage}
                        isPage={isPage}
                        totalCount={totalCount}
                        limit={limit}
                        number
                    />
                )}
            </div>
        </section>
    );
}
