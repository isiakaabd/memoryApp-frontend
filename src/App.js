import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'components/muiTheme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { SignUp } from 'components/pages';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};
export default App;
