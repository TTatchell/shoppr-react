import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

// Import reducers
import counterReducer from '../Features/counter/counterSlice'
import screenReducer from '../Features/screen/screenSlice'
import productReducer from "../Features/products/productsSlice";

// API Middleware
import api from "../store/middleware/api.js";

export default configureStore({
  reducer: {
    counter: counterReducer,
    screen: screenReducer,
    productReducer,
  },
  middleware: [...getDefaultMiddleware(), api],
})










//middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api],