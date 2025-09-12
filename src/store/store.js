import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";
import viewedSlice from "./slices/viewedSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartSlice,
        viewed: viewedSlice,
    },
});

export default store;
