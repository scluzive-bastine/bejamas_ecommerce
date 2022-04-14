import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './slices/basketSlice'

// Global STORE
const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
})

export default store
