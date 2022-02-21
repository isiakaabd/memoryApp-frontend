import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'components/muiTheme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import RequireAuth from 'components/route/RequireAuth';
import { Dashboard, SignUp } from 'components/pages';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<SignUp />} />

            <Route
              path="/"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};
export default App;
