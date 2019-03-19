import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './App';
import * as serviceWorker from './serviceWorker';
import reducers from './redux/reducers';

// middleware - вспомогательные ПО

// thunk для создания асинхронных экшенов
// logger для наглядного логгирования поведения редакса
const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));


serviceWorker.unregister();

if (module.hot) {
  module.hot.accept('./redux/reducers', () => {
    const nextRootReducer = require('./redux/reducers/index');
    store.replaceReducer(nextRootReducer);
  });
}