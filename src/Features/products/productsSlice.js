import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/actions.js";

const productSlice = createSlice({
    name: "products",
    initialState: {
        list: [],
        loading: false,
        requestSucceeded: false
    },

    reducers: {
        productsRequested: (products, action) => {
            products.loading = true;
        },

        productsReceived: (products, action) => {
            products.list = action.payload;
            products.requestSucceeded = true;
            products.loading = false;
        },

        productsRequestFailed: (products, action) => {
            products.requestSucceeded = false;
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