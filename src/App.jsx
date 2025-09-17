import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { MainLayout } from "./components/MainLayout/MainLayout";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Contacts } from "./pages/Contacts/Contacts";
import { NotFound } from "./pages/NotFound/NotFound";
import { Product } from "./pages/Product/Product";
import { Cart } from "./pages/Cart/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "shop", element: <Shop /> },
            { path: "contacts", element: <Contacts /> },
            { path: "cart", element: <Cart /> },
            { path: "shop/:productId", element: <Product /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
