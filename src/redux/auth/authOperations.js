import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(newToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${newToken}`;
  },
  clear() {
    axios.defaults.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    console.log('userData', userData);
    try {
      const response = await axios.post('/users/signup', userData);
      console.log(response);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
