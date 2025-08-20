import { GoogleMap } from "../../components/GoogleMap";
import cls from "./Contacts.module.css";

export function Contacts() {
    return (
        <section className={cls.contacts}>
            <div className="container">
                <h2 className={cls.text}>Contacts</h2>
                <div className={cls.wrapper}>
                    <div className={cls.wrapperBlock}>
                        <div className={cls.block}>
                            <h3>WARM HEART SHOP</h3>
                            <div className={cls.flexBlock}>
                                <p>
                                    Phone number: <span>+44 330 321 8754</span>
                                </p>
                                <p>
                                    Address:{" "}
                                    <span>2A Craven Street, Northampton</span>
                                </p>
                                <p>
                                    Email: <span>warmheart.shop@gmail.com</span>
                                </p>
                            </div>
                        </div>
                        <div className={cls.block}>
                            <h3>WARM HEART OFFICE</h3>
                            <div className={cls.flexBlock}>
                                <p>
                                    Phone number: <span>+44 330 456 1425</span>
                                </p>
                                <p>
                                    Address:{" "}
                                    <span>70 Edith Street, Northampton</span>
                                </p>
                                <p>
                                    Email:{" "}
                                    <span>warmheart.office@gmail.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cls.filter}>
                        <GoogleMap />
                    </div>
                </div>
            </div>
        </section>
    );
}
