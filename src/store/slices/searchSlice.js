import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearch = createAsyncThunk(
    "search/fetchSearch",
    async ({ q, to }) => {
        const params = new URLSearchParams();

        params.set("q", q);

        const res = await axios.get(
            `${import.meta.env.VITE_PRODUCTS_URL}${to}?${params.toString()}`
        );

        return {
            data: res.data,
        };
    }
);

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchList: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearch.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSearch.fulfilled, (state, action) => {
                state.loading = false;
                state.searchList = action.payload.data;
            })
            .addCase(fetchSearch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Something went wrong";
            });
    },
});

export default searchSlice.reducer;
