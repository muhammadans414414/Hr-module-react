import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';


window.authentication = "http://127.0.0.1:3002/admins/sign_in";
window.create_user = "http://localhost:3002/user/create";
window.users = "http://localhost:3002/users";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

