// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here
import App from './App';
import './styles.css';

// Create a root element for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);