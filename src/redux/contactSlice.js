import { createSlice } from '@reduxjs/toolkit';
import { logout } from './auth/authOperations';
import { addContact, fetchContacts, deleteContact } from './operations';

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
  // reducers: {
  //   clearContacts(state) {
  //     state.contacts = [];
  //   },
  // },
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
      // const idx = state.contacts.findIndex(el => el.id === action.payload.id);
      // state.contacts.splice(idx, 1);
    },
    [logout.fulfilled](state) {
      state.contacts = [];
      state.error = null;
      state.isLoading = false;
    }
  },
});

export const contactsReducer = contactsSlice.reducer;

// export const { clearContacts } = contactsSlice.actions;

export const getContactsState = state => state.contacts.contacts;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
// ***
