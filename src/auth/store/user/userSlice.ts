import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..';

interface UserState {
  login: string;
  session: string;
  isLoggedIn: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
    login: '',
    session: '',
    isLoggedIn: false
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<UserState>) => {
      state = action.payload
    },
  },
})

export const {  incrementByAmount } = counterSlice.actions

export const selectCount = (state: RootState) => state.users

export default counterSlice.reducer