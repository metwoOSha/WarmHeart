import { useEffect, useState } from "react";
import { Button } from "../../../../components/Button/Button";
import cls from "./CurrentProduct.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../store/slices/productsSlice";
import { Counter } from "../../../../components/Counter/Counter";

import { addToCart } from "../../../../store/slices/cartSlice";
import { Navigate } from "../../../../components/Navigate/Navigate";

export function CurrentProduct() {
    const [counter, setCounter] = useState(1);
    const [activeTab, setActiveTab] = useState("description");

    const { list } = useSelector((state) => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts({ to: "blankets" }));
    }, [dispatch]);

    const { productId } = useParams();

    const currentProduct = list.find((item) => item.id === Number(productId));

    function addProduct() {
        dispatch(addToCart({ ...currentProduct, quantity: counter }));
    }

    return currentProduct ? (
        <section className={cls.currentProduct}>
            <div className="container">
                <Navigate item={currentProduct.name} />
                <div className={cls.wrapper}>
                    <div className={cls.imageBlock}>
                        <img
                            src={currentProduct.image}
                            alt={currentProduct.name}
                        />
                    </div>
                    <div className={cls.infoBlock}>
                        <h2>{currentProduct.name}</h2>
                        <p className={cls.price}>€{currentProduct.price}</p>

                        <div className={cls.descr}>
                            <button
                                className={
                                    activeTab === "description"
                                        ? `${cls.button} ${cls.buttonActive}`
                                        : cls.button
                                }
                                onClick={() => setActiveTab("description")}
                            >
                                Description
                            </button>
                            <button
                                className={
                                    activeTab === "details"
                                        ? `${cls.button} ${cls.buttonActive}`
                                        : cls.button
                                }
                                onClick={() => setActiveTab("details")}
                            >
                                Details
                            </button>
                            <button
                                className={
                                    activeTab === "delivery"
                                        ? `${cls.button} ${cls.buttonActive}`
                                        : cls.button
                                }
                                onClick={() => setActiveTab("delivery")}
                            >
                                Delivery
                            </button>
                        </div>

                        <div className={cls.descrBlock}>
                            {activeTab === "description" && (
                                <div>
                                    Wool is stain resistant. This wear-resistant
                                    material perfectly retains heat. You can
                                    wrap yourself up comfortably lying on the
                                    couch or throw it over yourself when it's
                                    cool.
                                </div>
                            )}
                            {activeTab === "details" && (
                                <div>Details info...</div>
                            )}
                            {activeTab === "delivery" && (
                                <div>Delivery info...</div>
                            )}
                        </div>

                        <div className={cls.specBlock}>
                            <div>{`Size: ${currentProduct.size}`}</div>
                            <div>{`Color: ${currentProduct.color}`}</div>
                        </div>

                        <div className={cls.addBlock}>
                            <div className={cls.counter}>
                                <Counter
                                    counter={counter}
                                    setCounter={setCounter}
                                />
                            </div>
                            <Button onClick={addProduct} variant="product">
                                Add to cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ) : (
        <section className={cls.currentProduct}>
            <div className="container">
                <p style={{ padding: "40px 0", fontSize: "18px" }}>
                    Product not found.
                </p>
            </div>
        </section>
    );
}
