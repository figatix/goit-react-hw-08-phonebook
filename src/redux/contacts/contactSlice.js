import { createSlice } from '@reduxjs/toolkit';
import { logout } from '../auth/authOperations';
import {
  addContact,
  fetchContacts,
  deleteContact,
  updateContact,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = [...action.payload];
    },

    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = [action.payload, ...state.contacts];
    },

    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = state.contacts.filter(el => el.id !== action.payload.id);
    },
    [logout.pending]: handlePending,
    [logout.rejected]: handlePending,
    [logout.fulfilled](state) {
      state.contacts = [];
      state.error = null;
      state.isLoading = false;
    },
    [updateContact.pending]: handlePending,
    [updateContact.rejected]: handlePending,
    [updateContact.fulfilled](state, action) {
      state.contacts = state.contacts.map(el => {
        if (el.id === action.payload.id) {
          return action.payload;
        }
        return el;
      });
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
// ***
