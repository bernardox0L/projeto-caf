import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { AuthProvider } from './contexts/auth.context'
import { MessageProvider } from './contexts/message.context'
import { Routes } from './routes'
import { Provider } from 'react-redux'
import { store } from './redux'

render(
  <Provider store={store}>
    <AuthProvider>
      <MessageProvider>
        <Routes />
      </MessageProvider>
    </AuthProvider>
  </Provider>,
  document.getElementById('root')
);
