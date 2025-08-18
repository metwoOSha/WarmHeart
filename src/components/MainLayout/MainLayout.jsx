import { Footer } from "../Footer";
import { Header } from "../Header/Header";
import cls from "./MainLayout.module.css";

export function MainLayout() {
    return (
        <div className={cls.MainLayout}>
            <Header />
            <main className={cls.main}></main>
            <Footer />
        </div>
    );
}
