import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './components/context/AuthProvider';
import { CssBaseline } from '@mui/material';

const queryClient = new QueryClient();
ReactDOM.render(
  <>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>
  </>,
  document.getElementById('root'),
);
//   "plugin:promise/recommended",
