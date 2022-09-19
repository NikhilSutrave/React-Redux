import React from 'react';
import './style.css';
import Home from './Home';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}
