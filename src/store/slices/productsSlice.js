import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async ({ isPage = 1, limit, to }) => {
        const params = new URLSearchParams();

        if (limit) {
            params.set("_page", isPage);
            params.set("_limit", limit);
        }

        const res = await axios.get(
            `${import.meta.env.VITE_PRODUCTS_URL}${to}?${params.toString()}`
        );

        return {
            data: res.data,
            totalCount:
                parseInt(res.headers["x-total-count"], 10) || res.data.length,
        };
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        list: [],
        loading: false,
        error: null,
        totalCount: 0,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload.data;
                state.totalCount = action.payload.totalCount;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Something went wrong";
            });
    },
});

export default productsSlice.reducer;
