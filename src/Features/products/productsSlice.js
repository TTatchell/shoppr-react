import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from "./api";



export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        value: [],
        loading: false,
    },
    reducers: {
        productsRequested: (products, action) => {
            products.loading = true;
        },

        productsReceived: (products, action) => {
            products.list = action.payload;
            products.loading = false;
        },

        productsRequestFailed: (products, action) => {
            products.loading = false;
        },
    },
})

export const { productsRequested, productsReceived, productsRequestFailed } = productsSlice.actions

export default productsSlice.reducer



const url = "http://127.0.0.1:3000/categories";

export const loadproducts = () => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url,
            onStart: productsRequested.type,
            onSuccess: productsReceived.type,
            onError: productsRequestFailed.type,
        })
    );
};