import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header/Header";
import cls from "./MainLayout.module.css";
import { ScrollToTop } from "../../tools/ScrollToTop";

export function MainLayout() {
    return (
        <>
            <ScrollToTop />
            <Header />
            <main className={cls.main}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
