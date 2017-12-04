import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import reducer from './store/reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import routes from './routes'

const logger = createLogger({
 collapsed: (getState, action, logEntry)=>true
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk, logger)
  )
)

ReactDOM.render(

  <Provider store={store}>
      {routes}
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
