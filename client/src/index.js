import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import store from "./store";

const persistedStore = persistStore(store);
axios.defaults.baseURL = 'http://localhost:5000';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <PersistGate loading={<div>Loading...</div>} persistor={persistedStore}>
    <App />
    </PersistGate>
    </Provider>
);

