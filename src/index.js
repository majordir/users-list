import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { authStore } from './store/authStore';
import App from "./App";

import './auth';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={authStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
