import { createStore, compose, applyMiddleware } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import rootReducer from '../reducers'

export default function configureStore(history, initialState) {
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(
      applyMiddleware(routerMiddleware(history))
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
