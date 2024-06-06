import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        cartTotalQuantity: 0
    },
    reducers: {
        addToCart: (state, action) => {
            
            const inCartIndex = current(state.items).findIndex(
                (item) => item.product._id == action.payload.product._id
            );
            console.log(inCartIndex)
            if (inCartIndex >= 0) {
                state.items[inCartIndex].quantity += action.payload.quantity;
                state.cartTotalQuantity += action.payload.quantity;

            } else {
                state.items.push(action.payload);
                state.cartTotalQuantity += action.payload.quantity;

            }

        },
    },
});

export const { addToCart, decrement } = cartSlice.actions;
const { reducer } = cartSlice
export default reducer;
