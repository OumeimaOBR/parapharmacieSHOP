import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice'

export const store = configureStore({
  reducer: {
    //here we declare the reducers
   cart: cartReducer,
  },
})