import { createSlice } from '@reduxjs/toolkit'



export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        value: [],
    },
    reducers: {
        getFromRails: (state) => {
            fetch('http://127.0.0.1:3000/categories')
                .then(response => response.json())
                .then(data => console.log(data))
                .then(data => state.value = (data));
        },
        addProd: (state) => {
            // Add Product to array
        },
        deleteProd: (state, action) => {
            // Delete Product from array
        },
    },
})

export const { getFromRails, addProd, deleteProd } = productsSlice.actions

export default productsSlice.reducer