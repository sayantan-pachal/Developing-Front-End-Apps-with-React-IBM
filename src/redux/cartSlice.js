import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      const item = state.items.find(
        (i) => i.id === action.payload.id
      )

      if (item) {
        item.qty += 1
      } else {
        state.items.push({ ...action.payload, qty: 1 })
      }
    },

    removeItem(state, action) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      )
    },

    updateQty(state, action) {
      const { id, change } = action.payload
      const item = state.items.find((i) => i.id === id)
      if (item) {
        item.qty += change
        if (item.qty <= 0) {
          state.items = state.items.filter((i) => i.id !== id)
        }
      }
    },
  },
})

export const { addItem, removeItem, updateQty } = cartSlice.actions
export default cartSlice.reducer