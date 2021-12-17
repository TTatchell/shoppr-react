import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        list: [],
        count: 0,
        total: 0
    },
    reducers: {
        addToCart: (cart, action) => {
            console.log("Added to cart!")
            cart.count += 1
            cart.total += action.payload.price
            cart.list.push(action.payload);
        },
        removeFromCart: (cart, action) => {
            cart.list = cart.list.filter((element) => element.id != action.payload.id)
            cart.total -= action.payload.price
            cart.count -= 1
        },
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer