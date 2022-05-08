import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './components/AppRouter';
import { Provider } from "react-redux";
import { store, persistor } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
// ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename='goit-react-hw-08-phonebook'>
          <AppRouter />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
