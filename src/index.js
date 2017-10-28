import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router'

import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './App'
import configureStore from './store/configureStore'
import routes from './routes'

import './main.css'

injectTapEventPlugin()

const history = createBrowserHistory()

let state = window.__initialState__
const store = configureStore(history, state)

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);
