import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

type CartState = {
  items: Produto[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Produto>) => {
      state.items.push(action.payload)
    }
  }
})

export const { addItem } = cartSlice.actions

export default cartSlice.reducer
