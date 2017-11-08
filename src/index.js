
import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import allReducers from './reducers' // Or wherever you keep your reducers
import { Header, AboutPage, HomePage } from './components'
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
const logger  = createLogger()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    static: allReducers,
    router: routerReducer
  }),
  applyMiddleware(middleware, logger, thunk)
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Route exact path="/" component = {HomePage}/>
          <Route exact path="/about" component={AboutPage}/>
        </main>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
