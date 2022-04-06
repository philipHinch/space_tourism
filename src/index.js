import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// react v17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// react v18 migration
const container = document.getElementById('root');
const rootContainer = ReactDOM.createRoot(container);
rootContainer.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
