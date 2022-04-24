import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    deleteItemFromBasket: (state, action) => {
      const index = state.items.findIndex((i) => i._id === action.payload.id)
      let newBasket = [...state.items]
      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id} as its not in the basket)`
        )
      }
      state.items = newBasket
    },

    removeFromBasket: (state, action) => {
      state.items = []
    },

    increaseItemCount: (state, action) => {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item
        }),
      }
    },

    decreaseItemCount: (state, action) => {
      return {
        ...state,
        items: state.items
          .map((item) => {
            if (item._id === action.payload.id) {
              return { ...item, quantity: item.quantity - 1 }
            }
            return item
          })
          .filter((item) => item.quantity !== 0),
      }
    },
  },
})

export const {
  addToBasket,
  removeFromBasket,
  deleteItemFromBasket,
  increaseItemCount,
  decreaseItemCount,
} = basketSlice.actions

export const selectItems = (state) => state.basket.items

export const selectTotal = (state) =>
  state.basket.items.reduce(
    (CartTotal, item) => {
      const { price, quantity } = item
      const itemTotal = price * quantity

      CartTotal.total += itemTotal
      CartTotal.quantity += quantity
      return CartTotal
    },
    {
      total: 0,
      quantity: 0,
    }
  )

export default basketSlice.reducer
