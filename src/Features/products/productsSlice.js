import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/actions.js";

const productSlice = createSlice({
    name: "products",
    initialState: {
        list: [],
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
});

export default productSlice.reducer;

const { productsRequested, productsReceived, productsRequestFailed } = productSlice.actions;

const url = "/products";

export const loadproducts = () => (dispatch) => {
    console.log("loadProducts occurring");
    return dispatch(
        apiCallBegan({
            url,
            onStart: productsRequested.type,
            onSuccess: productsReceived.type,
            onError: productsRequestFailed.type,
        })
    );
};