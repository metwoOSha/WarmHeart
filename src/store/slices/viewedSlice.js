import { createSlice } from "@reduxjs/toolkit";

const viewedSlice = createSlice({
    name: "viewed",
    initialState: {
        list: [],
    },
    reducers: {
        addViewedItem: (state, action) => {
            const item = action.payload;

            const existingIndex = state.list.findIndex((i) => i.id === item.id);

            if (existingIndex !== -1) {
                state.list.splice(existingIndex, 1);
            }

            state.list.unshift(item);

            if (state.list.length > 4) {
                state.list.pop();
            }
        },
    },
});

export const { addViewedItem } = viewedSlice.actions;
export default viewedSlice.reducer;
