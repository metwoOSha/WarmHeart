import { LastViewed } from "./sections/LastViewed";
import { ListProducts } from "./sections/ListProducts/ListProducts";
import { ShopHeader } from "./sections/ShopHeader/ShopHeader";

export function Shop() {
    return (
        <>
            <ShopHeader />
            <ListProducts />
            <LastViewed />
        </>
    );
}
