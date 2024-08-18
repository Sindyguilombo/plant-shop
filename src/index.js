// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa createRoot desde react-dom/client en lugar de react-dom
import './index.css'; // Asegúrate de que este archivo exista o ajusta según corresponda
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'; // Asegúrate de que este archivo exista y exporte un store válido

// Obtén la referencia al elemento root
const rootElement = document.getElementById('root');

// Usa createRoot en lugar de ReactDOM.render
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

