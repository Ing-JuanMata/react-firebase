import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import RequireAuth from './components/RequireAuth';
import UserProvider from './context/UserProvider';
import Home from './routes/Home';
import Login from './routes/Login';
import NotFound from './routes/NotFound';
import Register from './routes/Register';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <UserProvider>
              <App />
            </UserProvider>
          }
        >
          <Route
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
