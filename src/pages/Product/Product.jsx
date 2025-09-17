import { AlsoLikeSection } from "./section/AlsoLikeSection/AlsoLikeSection";
import { CurrentProduct } from "./section/CurrentProductSection/CurrentProduct";
import { ViewedSection } from "./section/ViewedSection/ViewedSection";

export function Product() {
    return (
        <>
            <CurrentProduct />
            <AlsoLikeSection />
            <ViewedSection />
        </>
    );
}
