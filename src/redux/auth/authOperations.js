import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(newToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${newToken}`;
  },
  clear() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    console.log('userData', userData);
    try {
      const response = await axios.post('/users/signup', userData);
      // console.log(response);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (existUser, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', existUser);
      // console.log('🚀 ~ file: authOperations.js:36 ~ res:', res);
      token.set(res.data.token);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // console.log(res);
    token.clear();
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    if (!persistToken) {
      console.log(thunkAPI.rejectWithValue('Unable to fetch user'));
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    token.set(persistToken);
    try {
      const res = await axios.get('/users/current');
      console.log('🚀 ~ file: authOperations.js:69 ~ res:', res);
      return res.data;
    } catch (err) {
      console.log(thunkAPI.rejectWithValue('Unable to fetch user'));
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
