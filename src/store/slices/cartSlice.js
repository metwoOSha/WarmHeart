import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;

            const existingItem = state.items.find((i) => i.id === item.id);

            if (existingItem && item.quantity == 1) {
                existingItem.quantity += 1;
            } else if (existingItem && item.quantity > 1) {
                existingItem.quantity += item.quantity;
            } else {
                state.items.push({ ...item });
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
        },
        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.items.find((i) => i.id === id);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.items = state.items.filter((i) => i.id !== id);
                }
            }
        },
    },
});
export const { addToCart, removeFromCart, decreaseQuantity } =
    cartSlice.actions;
export default cartSlice.reducer;
