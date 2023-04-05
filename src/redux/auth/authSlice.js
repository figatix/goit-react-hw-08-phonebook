import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './authOperations';

// ? Допоміжні функції
const handlePending = state => {
  return {
    ...state,
    isRefreshing: true,
  };
};

const handleRejected = state => {
  return {
    ...state,
    isRefreshing: false,
  };
};

const extraActions = [login, logout, refreshUser, register];
const getActions = type => extraActions.map(action => action[type]);
// ?  /Допоміжні функції

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;

        // return {
        //   ...state,
        //   user: action.payload.user,
        //   token: action.payload.token,
        //   isLoggedIn: true,
        //   isRefreshing: false,
        // };
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;

        // return {
        //   ...state,
        //   user: { name: null, email: null },
        //   token: null,
        //   isLoggedIn: false,
        //   isRefreshing: false,
        // };
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        // return {
        //   ...state,
        //   user: action.payload.user,
        //   token: action.payload.token,
        //   isLoggedIn: true,
        //   isRefreshing: false,
        // };
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;

        // return {
        //   ...state,
        //   user: action.payload,
        //   isLoggedIn: true,
        //   isRefreshing: false,
        // };
      })
      .addMatcher(
        isAnyOf(
          // extraActions.map(action => action.pending)
          ...getActions('pending')
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          // extraActions.map(action => action.rejected)
          ...getActions('rejected')
        ),
        handleRejected
      ),
});

export const authReducer = authSlice.reducer;
