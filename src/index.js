import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
import { AuthProvider } from './components/context/AuthProvider';
import { CssBaseline } from '@mui/material';

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
