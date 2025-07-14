import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ notice '/client'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

// ✅ Create the root and render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

