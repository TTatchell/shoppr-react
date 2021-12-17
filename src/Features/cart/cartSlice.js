import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        list: [],
        count: 0
    },
    reducers: {
        addToCart: (cart, action) => {
            console.log("Added to cart!")
            cart.count += 1
            cart.list.push(action.payload);
        },
        removeFromCart: (cart, action) => {
            // Remove from cart logic
            cart.count -= 1
        },
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer