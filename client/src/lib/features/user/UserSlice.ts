import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface userType {
  user : string[]
}

const initialState: userType = {
    user: ['xyz']
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      
    },
    decrement: (state) => {
    //   state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      //state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer