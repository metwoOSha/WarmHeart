import cls from "./ListProducts.module.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../store/slices/productsSlice";
import { useEffect, useState } from "react";
import { Card } from "../../../../components/Card/Card";
import { Loading } from "../../../../components/Loading/Loading";

export function ListProducts() {
    const [page, setPage] = useState(2);
    const [limit, setLimit] = useState(5);
    const dispatch = useDispatch();

    const { list, loading, error, totalCount } = useSelector(
        (state) => state.products
    );

    console.log(totalCount);

    useEffect(() => {
        dispatch(fetchProducts({ page, limit, to: "blankets" }));
    }, [dispatch, page, limit]);

    console.log(list);

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
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
