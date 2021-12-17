import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

// Import reducers
import counterReducer from '../Features/counter/counterSlice';
import screenReducer from '../Features/screen/screenSlice';
import productReducer from "../Features/products/productsSlice";
import randomProduct from "../Features/products/randomProductSlice";
import cart from "../Features/cart/cartSlice";

// API Middleware
import api from "../store/middleware/api.js";

export default configureStore({
  reducer: {
    counter: counterReducer,
    screen: screenReducer,
    products: productReducer,
    randomProduct: randomProduct,
    cart: cart,

  },
  middleware: [...getDefaultMiddleware(), api],
})










//middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api],