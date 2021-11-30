import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../Features/counter/counterSlice'
import screenReducer from '../Features/screen/screenSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    screen: screenReducer
  },
})