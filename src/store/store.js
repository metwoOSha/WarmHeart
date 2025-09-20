import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";
import viewedSlice from "./slices/viewedSlice";
import searchSlice from "./slices/searchSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartSlice,
        viewed: viewedSlice,
        search: searchSlice,
    },
});

export default store;
