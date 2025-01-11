import { createSlice } from '@reduxjs/toolkit'
import { Session } from 'next-auth'
const initialState = {
  session: {} as Session
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.session = action.payload
    }
  }
})

export const { setAuth } = authSlice.actions
export default authSlice.reducer
