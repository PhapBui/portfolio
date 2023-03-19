import { createSlice, PayloadAction, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import { User } from 'models/user';

export interface LoginPayLoad {
  username: string;
  password: string;
}
export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User | any;
  error?: SerializedError;
}
const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
  error: {},
};

export const getMe = createAsyncThunk('/user/getMe', async (params, thunk) => {
  const response = await userApi.getMe();

  return response;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayLoad>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.logging = false;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMe.pending, (state) => {
        state.logging = true;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.logging = false;
        state.currentUser = action.payload;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.logging = false;
        state.error = action.error;
      });
  },
});

export const authAction = authSlice.actions;

export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.logging;
export const selectCurrentUser = (state: any) => state.auth.currentUser;

const authReducer = authSlice.reducer;

export default authReducer;
