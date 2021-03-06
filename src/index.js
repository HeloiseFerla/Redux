import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import counterReducer from './counterReducer';
import { createStore } from 'redux';


const store = createStore(counterReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
   <React.StrictMode>
    <App />
  </React.StrictMode> 
  </Provider>,
  document.getElementById('root')
);

