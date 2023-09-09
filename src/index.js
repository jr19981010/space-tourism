import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DisplayProvider from './DisplayContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <DisplayProvider>
    <App />
    </DisplayProvider>
  </React.StrictMode>
);