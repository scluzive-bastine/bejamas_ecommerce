import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
      console.log(state.items)
    },
    removeFromBasket: (state, action) => {
      state.items = []
    },
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectItems = (state) => state.basket.items

export default basketSlice.reducer