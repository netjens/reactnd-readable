import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import reducer from './store/reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import C from './constants'
import {BrowserRouter} from 'react-router-dom'
import ReadableApp from './components/ui/ReadableApp'
import routes from './routes'

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

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
