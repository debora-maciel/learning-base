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
    signIn: (state, action: PayloadAction<UserState>) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.login= action.payload.login;
      state.session = action.payload.session;
    }
  },
})

export const {  signIn } = counterSlice.actions

export const selectUser = (state: RootState) => state.user

export default counterSlice.reducer