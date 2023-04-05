import { App } from './components/App/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@mui/material';
import { theme } from 'theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter
          basename="/goit-react-hw-08-phonebook/"
          // basename="/"
        >
          <React.StrictMode>
            <App />
            <ToastContainer theme="dark" autoClose={2000} />
          </React.StrictMode>
        </BrowserRouter>
      </PersistGate>
    </ThemeProvider>
  </Provider>
);
