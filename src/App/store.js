import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import counterReducer from '../Features/counter/counterSlice'
import screenReducer from '../Features/screen/screenSlice'

import reducer from "../store/products.js";
import api from "../store/middleware/api.js";

export default configureStore({
  reducer: {
    counter: counterReducer,
    screen: screenReducer,
    reducer: reducer,
    middleware: [...getDefaultMiddleware(), api],
    //middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api],

  },
})