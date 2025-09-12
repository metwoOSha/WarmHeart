import cls from "./ListProducts.module.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../store/slices/productsSlice";
import { useEffect, useState } from "react";
import { Card } from "../../../../components/Card/Card";
import { Loading } from "../../../../components/Loading/Loading";
import { Pagination } from "../../../../components/Pagination";

export function ListProducts() {
    const [isPage, setIsPage] = useState(1);
    const [limit, setLimit] = useState(2);
    const dispatch = useDispatch();

    const { list, loading, error, totalCount } = useSelector(
        (state) => state.products
    );

    useEffect(() => {
        dispatch(fetchProducts({ isPage, limit, to: "blankets" }));
    }, [dispatch, isPage, limit]);

    return (
        <section className={cls.list}>
            {loading && <Loading />}
            <div className="container">
                <div className={cls.wrapper}>
                    {list.map((item) => (
                        <Card
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            size={item.size}
                            price={item.price}
                            id={item.id}
                            color={item.color}
                        />
                    ))}
                </div>
                {!loading && totalCount && limit && (
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
