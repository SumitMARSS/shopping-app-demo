import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppContextProvider from './context/AppContext';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AuthProvider>
    <AppContextProvider>
      <BrowserRouter>
        <Provider store={store} >
            <Routes>
              <Route path='/*' element={<App />} />
            </Routes>
            <Toaster/>
        </Provider>
      </BrowserRouter>

    </AppContextProvider>
  </AuthProvider>
  
);

