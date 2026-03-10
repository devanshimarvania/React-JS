// ============================================================
// FILE: src/index.js
// PURPOSE: Entry point of the React app.
//          Wraps <App> in Redux's <Provider> so every component
//          can access the Redux store via useSelector/useDispatch.
// ============================================================

import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap CSS — must be imported BEFORE our custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // for Navbar collapse to work

import App   from './App.jsx';
import store from './redux/store.js';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);