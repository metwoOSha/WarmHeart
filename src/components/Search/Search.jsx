import { useEffect, useState } from "react";
import { Portal } from "../../tools/Portal/Portal";

import cls from "./Search.module.css";
import { fetchSearch } from "../../store/slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { Link } from "react-router-dom";

export function Search({ onClose }) {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const trimmed = search.trim();

        if (search) {
            setLoading(true);
        }

        const handler = setTimeout(() => {
            if (trimmed) {
                dispatch(fetchSearch({ q: trimmed, to: "blankets" }));
            }
            setLoading(false);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [search, dispatch]);

    const { searchList } = useSelector((state) => state.search);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    function addProduct(id) {
        const currentProduct = searchList.find(
            (item) => item.id === Number(id)
        );
        dispatch(addToCart({ ...currentProduct, quantity: 1 }));
    }

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <Portal>
            <section className={cls.search}>
                <div className={cls.overlay} onClick={onClose}></div>
                <div className="container">
                    <div className={cls.block}>
                        <div id={cls.close} onClick={onClose}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 2L22 22M22 2L2 22"
                                    stroke="#2C2C2C"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        {loading && <span className={cls.loader}></span>}
                        <div className={cls.input}>
                            <div>
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.8333 22.1667C17.988 22.1667 22.1667 17.988 22.1667 12.8333C22.1667 7.67868 17.988 3.5 12.8333 3.5C7.67868 3.5 3.5 7.67868 3.5 12.8333C3.5 17.988 7.67868 22.1667 12.8333 22.1667Z"
                                        stroke="#2C2C2C"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M24.5008 24.5L19.4258 19.425"
                                        stroke="#2C2C2C"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                                name={search}
                            />
                        </div>

                        <div className={cls.wrapper}>
                            <div className={cls.items}>
                                {searchList.length > 0 && search.trim() ? (
                                    searchList.map((item) => (
                                        <div className={cls.card} key={item.id}>
                                            <Link
                                                to={`/shop/${item.id}`}
                                                onClick={onClose}
                                            >
                                                <div className={cls.imageBlock}>
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                    />
                                                </div>
                                            </Link>
                                            <div className={cls.infoBlock}>
                                                <h3>{item.name}</h3>
                                                <span id={cls.par}>
                                                    {item.size}
                                                </span>
                                                <span id={cls.par}>
                                                    Color: {item.color}
                                                </span>
                                                <span id={cls.sizeColor}>
                                                    {item.size}, {item.color}
                                                </span>
                                                <span
                                                    id={cls.price}
                                                >{`€${item.price}`}</span>
                                            </div>
                                            <div className={cls.priceBlock}>
                                                <p>{`€${item.price}`}</p>
                                                <button
                                                    onClick={() =>
                                                        addProduct(item.id)
                                                    }
                                                >
                                                    <div id={cls.icon}>
                                                        <svg
                                                            width="28"
                                                            height="28"
                                                            viewBox="0 0 28 28"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M7 2.33331L3.5 6.99998V23.3333C3.5 23.9522 3.74583 24.5456 4.18342 24.9832C4.621 25.4208 5.21449 25.6666 5.83333 25.6666H22.1667C22.7855 25.6666 23.379 25.4208 23.8166 24.9832C24.2542 24.5456 24.5 23.9522 24.5 23.3333V6.99998L21 2.33331H7Z"
                                                                stroke="#FDFBF9"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M3.5 7H24.5"
                                                                stroke="#FDFBF9"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M18.6673 11.6667C18.6673 12.9044 18.1757 14.0913 17.3005 14.9665C16.4253 15.8417 15.2383 16.3334 14.0007 16.3334C12.763 16.3334 11.576 15.8417 10.7008 14.9665C9.82565 14.0913 9.33398 12.9044 9.33398 11.6667"
                                                                stroke="#FDFBF9"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div id={cls.add}>Add</div>
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                ) : searchList.length === 0 && !search ? (
                                    <div className={cls.text}>
                                        No recent searches
                                    </div>
                                ) : searchList.length === 0 && search.trim() ? (
                                    <div className={cls.text}>
                                        No results for "{search}"
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Portal>
    );
}
