import { Link } from "react-router-dom";
import cls from "./Viewed.module.css";

import { useSelector } from "react-redux";

export function Viewed() {
    const { list } = useSelector((state) => state.viewed);

    return (
        <>
            <div className="container">
                <h2>Last viewed</h2>
                <div className={cls.wrapper}>
                    {list.map((item) => (
                        <Link key={item.id} to={`/shop/${item.id}`}>
                            <div className={cls.block}>
                                <img src={item.image} alt={item.name} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
