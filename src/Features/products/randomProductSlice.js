import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/actions.js";

const randomProductSlice = createSlice({
    name: "randomProduct",
    initialState: {
        product: [],
        loading: false,
        requestSucceeded: false
    },

    reducers: {
        productRequested: (product, action) => {
            product.loading = true;
        },

        productReceived: (product, action) => {
            product.list = action.payload;
            product.requestSucceeded = true;
            product.loading = false;
        },

        productRequestFailed: (product, action) => {
            product.requestSucceeded = false;
            product.loading = false;
        },
    },
});

export default randomProductSlice.reducer;

const { productRequested, productReceived, productRequestFailed } = randomProductSlice.actions;

const url = "/random";

export const loadRandomProduct = () => (dispatch) => {
    console.log("loadRandomProduct occurring");
    return dispatch(
        apiCallBegan({
            url,
            onStart: productRequested.type,
            onSuccess: productReceived.type,
            onError: productRequestFailed.type,
        })
    );
};