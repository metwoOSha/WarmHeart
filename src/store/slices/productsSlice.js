import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async ({ page = 1, limit = 10, to }) => {
        const queryParams = new URLSearchParams({
            _page: page,
            _limit: limit,
        }).toString();

        const res = await axios.get(
            `${import.meta.env.VITE_PRODUCTS_URL}${to}?${queryParams}`
        );

        return {
            data: res.data,
            totalCount: parseInt(res.headers["x-total-count"], 10) || 0,
        };
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        list: [],
        loading: false,
        error: null,
        totalCount: 0, // если хочешь хранить общее количество
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
