import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import WeatherStore from './stores/reducers/weather';
import { DEV } from './config'
import App from './App';
import './app.scss';

let enhancer
if (DEV) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  enhancer = composeEnhancers(applyMiddleware(thunk))
} else {
  enhancer = applyMiddleware(thunk)
}

const store = createStore(WeatherStore, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
