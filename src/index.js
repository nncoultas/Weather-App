import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={store(rootReducer, composeWithDevTools())}>
    <App />
  </Provider>,
  document.getElementById('root')
);
