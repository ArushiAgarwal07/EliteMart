import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Basically using these actions we change our products state. These actions are dispatched to trigger the reducers
        // If the item already exisit then just increment its quanity else add this item to the cart
        addToCart: (state, action) => {
                const item = state.products.find((item) => item.id === action.payload.id);
                if (item) {
                  item.quantity += action.payload.quantity;
                } else {
                  state.products.push(action.payload);
                }
              },
      removeItem: (state,action) => {
      state.products=state.products.filter(item=>item.id!==action.payload)
    },
    resetCart: (state, action) => {
      state.products=[]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeItem,resetCart } = cartSlice.actions

export default cartSlice.reducer