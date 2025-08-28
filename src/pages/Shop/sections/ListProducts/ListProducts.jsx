import cls from "./ListProducts.module.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../store/slices/productsSlice";
import { useEffect } from "react";
import { Card } from "../../../../components/Card/Card";
import { Loading } from "../../../../components/Loading/Loading";

export function ListProducts() {
    const dispatch = useDispatch();

    const { list, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

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
