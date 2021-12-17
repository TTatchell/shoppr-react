import { createSlice } from '@reduxjs/toolkit'

import HomePage from '../../Components/HomePage';
import Products from '../../Components/Products';
import About from '../../Components/About';
import Contact from '../../Components/Contact';
import Cart from '../../Components/Cart'

export const screenSlice = createSlice({
    name: 'screen',
    initialState: {
        value: < HomePage />,
    },
    reducers: {
        home: (state) => {
            state.value = < HomePage />
        },
        products: (state) => {
            state.value = < Products />
        },
        about: (state) => {
            state.value = < About />
        },
        contact: (state) => {
            state.value = < Contact />
        },
        cart: (state) => {
            state.value = < Cart />
        },
    },
})

export const { home, products, about, contact, cart } = screenSlice.actions

export default screenSlice.reducer